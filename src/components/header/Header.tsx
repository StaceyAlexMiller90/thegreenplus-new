import classNames from 'classnames';
import Navigation from '@/components/navigation/Navigation';

import styles from './Header.module.scss';

interface Header {
    inverted?: boolean;
}

const Header = ({ inverted }: Header) => {
    return (
        <header className={classNames(styles.Header, { [styles.isInverted]: inverted })}>
            <Navigation inverted={inverted} />
        </header>
    );
};

export default Header;
