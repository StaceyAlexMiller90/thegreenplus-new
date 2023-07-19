import styles from './Quote.module.scss';

const Quote = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Quote}>
                <span>Offset </span>
                <span>Your </span>
                <span>Travel</span>
            </h1>
            <div className={styles.SubQuote}>
                <p>
                    <span>HONEST </span>
                    <span>& </span>
                    <span>EASY.</span>
                </p>
            </div>
        </div>
    );
};

export default Quote;
