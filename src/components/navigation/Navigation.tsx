'use client';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';
import useScrolled from '../../hooks/useScrolled';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import { scrollToTop } from '../../utils/utils';

import styles from './Navigation.module.scss';

const Navigation = () => {
    const pathname = usePathname();
    const isScrolled = useScrolled();

    const isHomePage = pathname === '/';

    return (
        <nav className={styles.Navigation}>
            <Button variant="naked" {...(isHomePage ? { onClick: scrollToTop } : { href: '/' })}>
                <Logo simplified={isScrolled} />
            </Button>

            <m.div
                initial={{ x: 300 }}
                animate={{ x: isScrolled ? 0 : 300 }}
                transition={{ duration: 0.3 }}
                className={styles.Button}>
                <Button href="/#contact">Contact</Button>
            </m.div>
        </nav>
    );
};

export default Navigation;
