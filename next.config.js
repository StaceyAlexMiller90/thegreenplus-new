/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '',
    i18n: {
        locales: ['nl', 'en'],
        defaultLocale: 'en',
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
