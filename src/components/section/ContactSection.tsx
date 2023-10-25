import Section from './Section';
import styles from './ContactSection.module.scss';
import ContactForm from '../contact-form/ContactForm';

const ContactSection = () => {
    return (
        <Section variant="primary" className={styles.ContactSection}>
            <ContactForm />
        </Section>
    );
};

export default ContactSection;
