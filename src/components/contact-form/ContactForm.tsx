'use client';
import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="container w_limited container--contact">
            <header className="header_headline header--contact">
                <h2 id="response" className="splittext splitext--contact">
                    Together we can make <br /> a change. Let&apos;s start today.
                </h2>
            </header>
            <div className="contact-section">
                <div className="contact-section__column contact-section__column--mobile">
                    <p className="contact_fade">
                        For more information about the options we offer, our project criteria,
                        project portfolio or any other queries.
                    </p>
                </div>
                <form className="contact-form" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            {...register('name', {
                                required: true,
                                maxLength: 30,
                                pattern: {
                                    value: /^[0-9A-Za-z\s.,!?'"()\-]+$/,
                                    message: 'Invalid input',
                                },
                            })}
                            type="text"
                            name="name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            {...register('email', {
                                required: true,
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Entered value does not match email format',
                                },
                            })}
                            type="email"
                            name="email"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            {...register('message', {
                                required: true,
                                maxLength: 1000,
                                pattern: {
                                    value: /^[0-9A-Za-z\s.,!?'"()\-]+$/,
                                    message: 'Invalid input',
                                },
                            })}
                            className="form-control"
                            name="message"
                            rows={5}
                        />
                    </div>
                </form>
                <div className="contact-section__column contact-section__column--desktop">
                    <p className="contact_fade contact-section__text--desktop">
                        For more information about the options we offer, our project criteria,
                        project portfolio or any other queries.
                    </p>
                    <Button variant="secondary" type="submit" form="contact-form">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
