'use client';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import useScrolled from 'src/hooks/useScrolled';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
    const isScrolled = useScrolled();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav className={styles.Navigation}>
            <Button variant="naked" onClick={scrollToTop}>
                <Logo simplified={isScrolled} />
            </Button>

            <motion.div
                initial={{ x: 300 }}
                animate={{ x: isScrolled ? 0 : 300 }}
                transition={{ duration: 0.3 }}
                className={styles.Button}>
                <Button onClick={scrollToTop}>Contact</Button>
            </motion.div>
        </nav>
    );
};

export default Navigation;
