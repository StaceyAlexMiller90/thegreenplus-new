import { PropsWithChildren } from 'react';
import { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Body from '@/components/body/Body';

import '../styles/globals.scss';

export const metadata: Metadata = {
    metadataBase: new URL('https://thegreenplus.nl'),
    title: 'The Green Plus',
    description: 'Offset your travel. Honest & Easy.',
    applicationName: 'The Green Plus',
    referrer: 'origin-when-cross-origin',
    keywords: ['Co2', 'carbon offsetting', 'offset', 'travel', 'emissions'],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'The Green Plus',
        description: 'Offset your travel. Honest & Easy.',
        url: 'https://thegreenplus.nl',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Green Plus',
        description: 'Offset your travel. Honest & Easy.',
    },
};

export const viewport: Viewport = {
    themeColor: '#151515',
};

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
        <html className={stolzl.variable}>
            <Body>{children}</Body>
        </html>
    );
};

export default RootLayout;
