import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ModalContextProvider from '../context/ModalContextProvider';

import '../styles/globals.scss';

const stolzl = localFont({
    variable: '--primary-font',
    display: 'swap',
    src: [
        {
            path: './fonts/Stolzl-Book.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/Stolzl-Regular.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/Stolzl-Medium.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html style={{ overflow: 'hidden' }} className={stolzl.variable}>
            <body>
                <ModalContextProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ModalContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
