import { ReactNode, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import styles from './Grid.module.scss';

interface GridItem {
    heading?: string;
    children: ReactNode;
}
interface GridProps {
    children: ReactNode;
}

const Grid = ({ children }: GridProps) => {
    return <div className={styles.Grid}>{children}</div>;
};

const Item = ({ heading, children }: GridItem) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 'some' });

    const variants = {
        initial: {
            y: '10%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <m.div
            ref={ref}
            key={heading}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={variants}
            transition={{ delay: 0.2, duration: 0.2, stiffness: 20, type: 'easeInOut' }}
            className={styles.GridItem}>
            {heading ? <h3 className={styles.Heading}>{heading}</h3> : null}
            <div className={styles.Body}>{children}</div>
        </m.div>
    );
};

Grid.Item = Item;

export default Grid;
