import { ReactNode } from 'react';
import styles from './Grid.module.scss';

interface GridItem {
    heading: string;
    children: ReactNode;
}
interface GridProps {
    children: ReactNode;
}

const Grid = ({ children }: GridProps) => {
    return <div className={styles.Grid}>{children}</div>;
};

const Item = ({ heading, children }: GridItem) => {
    return (
        <div key={heading} className={styles.GridItem}>
            <h3 className={styles.Heading}>{heading}</h3>
            <div className={styles.Body}>{children}</div>
        </div>
    );
};

Grid.Item = Item;

export default Grid;
