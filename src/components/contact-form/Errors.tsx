import { MultipleFieldErrors } from 'react-hook-form';
import styles from './ContactForm.module.scss';

const Errors = ({ messages }: { messages?: MultipleFieldErrors | undefined }) => {
    if (messages) {
        return (
            <ul className={styles.ValidationList}>
                {Object.entries(messages).map(([type, message]) => (
                    <li key={type} className={styles.ValidationMessage}>
                        {message}
                    </li>
                ))}
            </ul>
        );
    }
};

export default Errors;
