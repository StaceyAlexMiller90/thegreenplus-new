import styles from './Loader.module.scss';

interface LoaderProps {
    label: string;
}

const Loader = ({ label }: LoaderProps) => {
    return (
        <div className={styles.Loading} aria-busy="true" aria-label={label}>
            <div className={styles.Dots} />
        </div>
    );
};

export default Loader;
