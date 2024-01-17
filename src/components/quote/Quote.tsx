'use client';
import { m } from 'framer-motion';
import styles from './Quote.module.scss';

const mainVariants = {
    initial: { y: '-20px', opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

const subQuoteVariants = {
    initial: { y: '8px', opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

const Quote = () => {
    return (
        <div className={styles.Container}>
            <m.h1
                className={styles.Quote}
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.5, delayChildren: 3 }}>
                <m.span
                    variants={mainVariants}
                    transition={{ stiffness: 50 }}
                    className={styles.Main}>
                    Offset your travel
                </m.span>
                <m.span variants={subQuoteVariants} className={styles.SubQuote}>
                    Honest & easy.
                </m.span>
            </m.h1>
        </div>
    );
};

export default Quote;
