import { FC, PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal';
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

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html className={stolzl.variable}>
            <body>
                <Header />
                <main>{children}</main>
                <ModalContextProvider>
                    <Modal />
                    <Footer />
                </ModalContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
