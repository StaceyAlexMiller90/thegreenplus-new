import { ReactNode } from 'react';
import styles from './Grid.module.scss';

interface GridItem {
    heading: string;
    paragraphs: string[];
}

interface CustomComponent {
    customComponent: ReactNode;
}

interface GridProps {
    gridItems: (GridItem | CustomComponent)[];
}

const Grid = ({ gridItems }: GridProps) => {
    return (
        <div className={styles.Grid}>
            {gridItems.map((gridItem, i) => {
                if ('customComponent' in gridItem) {
                    const Component = gridItem.customComponent;

                    return Component;
                } else if ('heading' in gridItem && 'paragraphs' in gridItem) {
                    const { heading, paragraphs } = gridItem;

                    return (
                        <div key={heading} className={styles.GridItem}>
                            <h3 className={styles.Heading}>{heading}</h3>
                            <div className={styles.Body}>
                                {paragraphs.map(paragraph => {
                                    return (
                                        <p key={paragraph} className={styles.Paragraph}>
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Grid;
