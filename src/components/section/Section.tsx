import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Section.module.scss';

interface SectionProps {
    children: ReactNode;
    variant?: 'naked' | 'primary' | 'secondary';
    className?: string;
}

const Section = ({ children, variant = 'naked', className }: SectionProps) => {
    return (
        <section
            className={classNames(
                styles.Section,
                {
                    [styles.Primary]: variant === 'primary',
                    [styles.Secondary]: variant === 'secondary',
                },
                className,
            )}>
            {children}
        </section>
    );
};

export default Section;
