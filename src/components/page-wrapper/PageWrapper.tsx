import { ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

interface PageWrapper {
    title: string;
    children: ReactNode;
}

const PageWrapper = ({ children, title }: PageWrapper) => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>{title}</h1>
            {children}
        </div>
    );
};

export default PageWrapper;
