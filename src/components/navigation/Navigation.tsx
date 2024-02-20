'use client';
import { LazyMotion, domAnimation } from 'framer-motion';
import { m } from 'framer-motion';
import useScrolled from '@/hooks/useScrolled';
import Button from '@/components/button/Button';
import Logo from '@/components/logo/Logo';

import styles from './Navigation.module.scss';

interface Navigation {
    inverted?: boolean;
}

const Navigation = ({ inverted }: Navigation) => {
    const isScrolled = useScrolled();

    return (
        <LazyMotion strict features={domAnimation}>
            <nav className={styles.Navigation}>
                <Button variant="naked" href="/">
                    <Logo simplified={isScrolled} inverted={inverted} />
                </Button>

                <m.div
                    initial={{ x: 300 }}
                    animate={{ x: isScrolled ? 0 : 300 }}
                    transition={{ duration: 0.2 }}
                    className={styles.Button}>
                    <Button href="/#contact" variant={inverted ? 'secondary' : 'primary'}>
                        Contact
                    </Button>
                </m.div>
            </nav>
        </LazyMotion>
    );
};

export default Navigation;
