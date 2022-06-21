import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="theme-color" content="#151515" />            
                <meta
                name="description"
                content="Offset your travel. Honest &amp; Easy."
                />
                <link
                rel="icon"
                type="image/png"
                href="./favicon-32x32.png"
                sizes="32x32"
                />
                <link
                rel="icon"
                type="image/png"
                href="./favicon-64x64.png"
                sizes="64x64"
                />
                <link
                rel="apple-touch-icon"
                href="./favicon-180x180.png"
                sizes="180x180"
                />
                <link rel="shortcut icon" href="./favicon-32x32.png" />

                <meta
                property="og:logo"
                content="./assets/i/favicon/favicon-180x180.png" />
                <meta property="og:url" content="https://thegreenplus.nl" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="The Green Plus" />
                <meta property="og:description" content="Offset your travel. Honest &amp; Easy." />
                <meta property="og:image" itemProp="image" content="/logo.svg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="The Green Plus" />
                <meta name="twitter:description" content="Offset your travel. Honest &amp; Easy." />
                <meta name="twitter:image" content="/logo.svg" />

                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://thegreenplus.nl" />
                <link rel="shortlink" href="https://thegreenplus.nl" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous" 
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
