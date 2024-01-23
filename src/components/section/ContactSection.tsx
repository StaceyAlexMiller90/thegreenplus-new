import Section from './Section';
import ContactForm from '@/components/contact-form/ContactForm';

import styles from './ContactSection.module.scss';

const ContactSection = () => {
    return (
        <Section variant="primary" className={styles.Section}>
            <div className={styles.Wrapper}>
                <h2 id="response" className={styles.Title}>
                    Together we can make <br /> a change. Let&apos;s start today.
                </h2>

                <p className={styles.Text}>
                    For more information about the options we offer, our project criteria, project
                    portfolio or any other queries.
                </p>
                <ContactForm />
            </div>
        </Section>
    );
};

export default ContactSection;
