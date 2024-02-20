import { PropsWithChildren } from 'react';
import Header from '@/components/header/Header';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header inverted />
            <main>{children}</main>
        </>
    );
};

export default Layout;
