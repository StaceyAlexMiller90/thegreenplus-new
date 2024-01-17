'use client';
import { m } from 'framer-motion';
import styles from './LoadingScreen.module.scss';
import { useEffect } from 'react';
import useScrollLock from 'src/hooks/useScrollLock';
import { scrollToTop } from 'src/utils/utils';

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

const variantsWithBg = {
    initial: { clipPath: 'inset(0 100% 0 0)' },
    animate: { clipPath: 'inset(0 0 0 0)' },
};

const LoadingScreen = () => {
    const { setScrollLocked } = useScrollLock();

    useEffect(() => {
        setScrollLocked(true);
        setTimeout(() => setScrollLocked(false), 3100);

        return () => scrollToTop();
    }, [setScrollLocked]);

    return (
        <m.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{ duration: 1, delay: 2 }}
            className={styles.Screen}>
            <m.h2
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className={styles.Heading}
                aria-label="Leave a legacy. Not a footprint">
                {'Leave a '.split('').map((char, index) => {
                    return (
                        <m.span aria-hidden="true" key={`${char}-${index}`} variants={variants}>
                            {char}
                        </m.span>
                    );
                })}

                <m.span
                    aria-hidden="true"
                    transition={{ duration: 0.5 }}
                    variants={variantsWithBg}
                    className={styles.TextBackground}>
                    Legacy
                </m.span>

                <m.span
                    initial="initial"
                    animate="animate"
                    transition={{ staggerChildren: 0.05, delayChildren: 1.2 }}
                    className={styles.Line}
                    aria-hidden="true">
                    {'Not a '.split('').map((char, index) => {
                        return (
                            <m.span key={`${char}-${index}`} variants={variants}>
                                {char}
                            </m.span>
                        );
                    })}

                    <m.span
                        transition={{ duration: 0.5 }}
                        variants={variantsWithBg}
                        className={styles.TextBackground}>
                        Footprint
                    </m.span>
                </m.span>
            </m.h2>
        </m.div>
    );
};

export default LoadingScreen;
