'use client';
import { useState } from 'react';
import Section from './Section';
import ContactForm from '@/components/contact-form/ContactForm';

import styles from './ContactSection.module.scss';

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <Section variant="primary" className={styles.Section}>
            {submitted ? (
                <p className={styles.SuccessMessage}>Email submitted. Thank you!</p>
            ) : (
                <div className={styles.Wrapper}>
                    <h2 id="response" className={styles.Title}>
                        Together we can make <br /> a change. Let&apos;s start today.
                    </h2>

                    <p className={styles.Text}>
                        For more information about the options we offer, our project criteria,
                        project portfolio or any other queries.
                    </p>
                    <ContactForm setSubmitted={setSubmitted} />
                </div>
            )}
        </Section>
    );
};

export default ContactSection;
