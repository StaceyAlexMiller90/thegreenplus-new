'use client';
import { useRef } from 'react';
import classNames from 'classnames';
import { useInView } from 'framer-motion';
import styles from './HeaderHighlight.module.scss';

interface HeaderHighlightProps {
    heading: string;
    highlightSubstring: string;
}

const HeaderHighlight = ({ heading, highlightSubstring }: HeaderHighlightProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 'all' });

    const parts = heading.split(highlightSubstring);

    return (
        <h2 ref={ref} className={styles.Header}>
            {parts[0]}
            <br />
            <span className={classNames(styles.Highlight, { [styles.inView]: isInView })}>
                {highlightSubstring}
            </span>
            {parts[1]}
        </h2>
    );
};

export default HeaderHighlight;
