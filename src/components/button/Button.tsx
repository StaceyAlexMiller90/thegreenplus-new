'use client';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface BaseProps {
    variant?: 'primary' | 'secondary' | 'naked';
}

interface AnchorProps extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
}

type ButtonOrAnchorProps = AnchorProps | ButtonProps;

const Button = ({ children, variant = 'primary', ...other }: ButtonOrAnchorProps) => {
    const isAnchor = 'href' in other;

    const classes = classNames(
        styles.Button,
        { [styles.isSecondary]: variant === 'secondary' },
        { [styles.isNaked]: variant === 'naked' },
    );

    if (isAnchor) {
        const { href, ...anchorProps } = other as AnchorProps;
        return (
            <a href={href} className={classes} {...anchorProps}>
                {children}
            </a>
        );
    } else {
        const { onClick, ...buttonProps } = other as ButtonProps;
        return (
            <button onClick={onClick} className={classes} {...buttonProps}>
                {children}
            </button>
        );
    }
};

export default Button;
