'use client';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface BaseProps {
    variant?: 'primary' | 'secondary' | 'naked';
}

interface AnchorProps extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

type ButtonOrAnchorProps = AnchorProps | ButtonProps;

const Button = ({ children, variant = 'primary', ...rest }: ButtonOrAnchorProps) => {
    const isAnchor = 'href' in rest;

    const classes = classNames(
        styles.Button,
        { [styles.isSecondary]: variant === 'secondary' },
        { [styles.isNaked]: variant === 'naked' },
    );

    if (isAnchor) {
        const { href, ...anchorProps } = rest as AnchorProps;
        return (
            <a href={href} className={classes} {...anchorProps}>
                {children}
            </a>
        );
    } else {
        const { onClick, ...buttonProps } = rest as ButtonProps;
        return (
            <button onClick={onClick} className={classes} {...buttonProps}>
                {children}
            </button>
        );
    }
};

export default Button;
