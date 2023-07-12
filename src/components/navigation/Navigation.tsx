'use client';
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

            <div className={classNames(styles.Button, { [styles.isVisible]: isScrolled })}>
                <Button onClick={scrollToTop}>Contact</Button>
            </div>
        </nav>
    );
};

export default Navigation;
