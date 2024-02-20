import styles from './Docs.module.scss';

interface CodeComponent {
    content: string;
}

const CodeComponent = ({ content }: CodeComponent) => (
    <pre className={styles.Code}>
        <code>{content}</code>
    </pre>
);

export default CodeComponent;
