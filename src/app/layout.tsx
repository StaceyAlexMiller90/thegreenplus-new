'use client';
import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import { LazyMotion, domAnimation } from 'framer-motion';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal';
import ModalContextProvider from '../context/ModalContextProvider';
import LoadingScreen from '../components/loading-screen/LoadingScreen';

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
        <LazyMotion strict features={domAnimation}>
            {/* Start with overflow hidden - will be reset when LoadingScreen finishes animating */}
            <html style={{ overflow: 'hidden' }} className={stolzl.variable}>
                <body>
                    <LoadingScreen />
                    <Header />
                    <main>{children}</main>
                    <ModalContextProvider>
                        <Modal />
                        <Footer />
                    </ModalContextProvider>
                </body>
            </html>
        </LazyMotion>
    );
};

export default RootLayout;
