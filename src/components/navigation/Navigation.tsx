'use client';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import useScrolled from 'src/hooks/useScrolled';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import styles from './Navigation.module.scss';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();
    const isScrolled = useScrolled();

    const isHomePage = pathname === '/';

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav className={styles.Navigation}>
            <Button variant="naked" {...(isHomePage ? { onClick: scrollToTop } : { href: '/' })}>
                <Logo simplified={isScrolled} />
            </Button>

            <motion.div
                initial={{ x: 300 }}
                animate={{ x: isScrolled ? 0 : 300 }}
                transition={{ duration: 0.3 }}
                className={styles.Button}>
                <Button href="/#contact">Contact</Button>
            </motion.div>
        </nav>
    );
};

export default Navigation;
