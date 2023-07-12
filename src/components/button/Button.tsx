'use client';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface BaseProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'naked';
}

interface AnchorProps extends BaseProps {
    href: string;
}

interface ButtonProps extends BaseProps {
    onClick: () => void;
}

const Button = ({ children, variant = 'primary', ...other }: ButtonProps | AnchorProps) => {
    const Tag = 'href' in other ? 'a' : 'button';

    return (
        <Tag
            className={classNames(
                styles.Button,
                { [styles.isSecondary]: variant === 'secondary' },
                { [styles.isNaked]: variant === 'naked' },
            )}
            {...other}>
            {children}
        </Tag>
    );
};

export default Button;
