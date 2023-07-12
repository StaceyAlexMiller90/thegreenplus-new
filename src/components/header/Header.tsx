import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.Header}>
            <Navigation />
        </header>
    );
};

export default Header;
