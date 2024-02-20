'use client';
import { LazyMotion, domAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';
import useScrolled from '@/hooks/useScrolled';
import Button from '@/components/button/Button';
import Logo from '@/components/logo/Logo';
import { scrollToTop } from '@/utils/utils';

import styles from './Navigation.module.scss';

const Navigation = () => {
    const pathname = usePathname();
    const isScrolled = useScrolled();

    const isHomePage = pathname === '/';

    return (
        <LazyMotion strict features={domAnimation}>
            <nav className={styles.Navigation}>
                <Button
                    variant="naked"
                    {...(isHomePage ? { onClick: scrollToTop } : { href: '/' })}>
                    <Logo simplified={isScrolled} />
                </Button>

                <m.div
                    initial={{ x: 300 }}
                    animate={{ x: isScrolled ? 0 : 300 }}
                    transition={{ duration: 0.2 }}
                    className={styles.Button}>
                    <Button href="/#contact">Contact</Button>
                </m.div>
            </nav>
        </LazyMotion>
    );
};

export default Navigation;
