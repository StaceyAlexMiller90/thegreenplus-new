import styles from './HeaderHighlight.module.scss';

interface HeaderHighlightProps {
    heading: string;
    highlightSubstring: string;
}

const HeaderHighlight = ({ heading, highlightSubstring }: HeaderHighlightProps) => {
    const parts = heading.split(highlightSubstring);

    return (
        <h2 className={styles.Header}>
            {parts[0]}
            <br />
            <span className={styles.Highlight}>{highlightSubstring}</span>
            {parts[1]}
        </h2>
    );
};

export default HeaderHighlight;
