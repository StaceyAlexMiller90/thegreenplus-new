'use client';
import { ReactNode } from 'react';
import styles from './PageWrapper.module.scss';
import { useSelectedLayoutSegments } from 'next/navigation';

interface PageWrapper {
    children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapper) => {
    const segments = useSelectedLayoutSegments();
    const lastSegment = segments.at(segments.length - 1);

    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>
                {lastSegment === 'terms' ? 'terms & conditions' : lastSegment}
            </h1>
            {children}
        </div>
    );
};

export default PageWrapper;
