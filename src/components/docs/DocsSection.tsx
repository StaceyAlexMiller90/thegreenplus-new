import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Docs.module.scss';

interface DocsSection {
    headingLevel?: number;
    number?: number;
    title?: string;
    subSection?: boolean;
}

const DocsSection = ({ title, headingLevel = 2, children }: PropsWithChildren<DocsSection>) => {
    const HTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

    return (
        <section
            id={title?.replace(' ', '')}
            className={classNames(styles.Section, { [styles.withTitle]: title })}>
            {title ? <HTag className={styles[`Title${headingLevel}`]}>{title}</HTag> : null}
            {children}
        </section>
    );
};

export default DocsSection;
