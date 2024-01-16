'use client';
import { useState } from 'react';
import classNames from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from '../button/Button';
import styles from './ContactForm.module.scss';
import { emailRegex, nameRegex, messageRegex } from '../../utils/regex';
import Loader from '../loader/Loader';
import Errors from './Errors';

export interface FormInputs {
    name: string;
    email: string;
    message: string;
    privacyConsent: boolean;
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid, isSubmitting },
    } = useForm<FormInputs>({ criteriaMode: 'all', mode: 'onBlur', reValidateMode: 'onSubmit' });

    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onSubmit: SubmitHandler<FormInputs> = async ({ name, email, message }) => {
        try {
            const res = await fetch('/email', {
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });

            const response = await res.json();

            if (!response.ok || (!response.success && response.type === 'submission')) {
                throw new Error('Something went wrong, please try again');
            }

            setSubmitted(true);
        } catch (error) {
            if (error && error instanceof Error) {
                setErrorMessage(error.message);
            }
        }
    };

    return (
        <>
            {isSubmitting ? <Loader label="sending email" /> : null}

            {errorMessage ? <p className={styles.ErrorMessage}>{errorMessage}</p> : null}

            {submitted ? (
                <p className={styles.SuccessMessage}>Email submitted! Thank you!</p>
            ) : (
                <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.Group}>
                        <label htmlFor="name" className={styles.Label}>
                            Name
                        </label>
                        <ErrorMessage errors={errors} name="name" render={Errors} />
                        <input
                            {...register('name', {
                                required: 'Please enter your name',
                                maxLength: {
                                    value: 30,
                                    message: 'Name cannnot be longer than 30 characters',
                                },
                                pattern: {
                                    value: nameRegex,
                                    message: 'Name cannot contain numbers',
                                },
                            })}
                            type="text"
                            name="name"
                            id="name"
                            className={styles.Input}
                        />
                    </div>
                    <div className={styles.Group}>
                        <label htmlFor="email" className={styles.Label}>
                            Email
                        </label>
                        <ErrorMessage errors={errors} name="email" as="ul" render={Errors} />
                        <input
                            {...register('email', {
                                required: 'Please enter your email address',
                                pattern: {
                                    value: emailRegex,
                                    message: 'Entered value does not match email format',
                                },
                            })}
                            type="email"
                            name="email"
                            id="email"
                            className={styles.Input}
                        />
                    </div>
                    <div className={styles.Group}>
                        <label htmlFor="message" className={styles.Label}>
                            Your message
                        </label>
                        <ErrorMessage errors={errors} name="message" as="ul" render={Errors} />
                        <textarea
                            {...register('message', {
                                required: 'Please enter a message',
                                maxLength: {
                                    value: 1000,
                                    message: 'Message cannot be longer than 1000 characters',
                                },
                                pattern: {
                                    value: messageRegex,
                                    message: 'Invalid input',
                                },
                            })}
                            className={classNames(styles.Input, styles.TextArea)}
                            id="message"
                            name="message"
                            rows={5}
                        />
                    </div>
                    <div className={styles.Group}>
                        <ErrorMessage
                            errors={errors}
                            name="privacyConsent"
                            as="ul"
                            render={Errors}
                        />
                        <div className={styles.GroupInline}>
                            <input
                                {...register('privacyConsent', {
                                    required:
                                        'Please confirm you have read and accept our privacy policy and terms and conditions',
                                })}
                                className={classNames(styles.Input, styles.Checkbox)}
                                name="privacyConsent"
                                id="privacyConsent"
                                type="checkbox"
                            />
                            <label htmlFor="privacyConsent" className={styles.Label}>
                                I confirm that I have read and accept the{' '}
                                <Button className={styles.Link} variant="naked" href="/privacy">
                                    privacy policy
                                </Button>{' '}
                                and{' '}
                                <Button className={styles.Link} variant="naked" href="/terms">
                                    terms and conditions
                                </Button>
                            </label>
                        </div>
                    </div>
                    <div className={styles.Button}>
                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={!isDirty || !isValid || isSubmitting}>
                            Submit
                        </Button>
                    </div>
                </form>
            )}
        </>
    );
};

export default ContactForm;
