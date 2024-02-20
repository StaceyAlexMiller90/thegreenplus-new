'use client';
import { usePathname } from 'next/navigation';
import { CSSProperties, PropsWithChildren } from 'react';

const Body = ({ children }: PropsWithChildren) => {
    const pathname = usePathname();
    return (
        <body
            style={
                pathname !== '/'
                    ? ({
                          '--body-color': 'var(--white)',
                          '--text-color': 'var(--black)',
                      } as CSSProperties)
                    : {}
            }>
            {children}
        </body>
    );
};

export default Body;
