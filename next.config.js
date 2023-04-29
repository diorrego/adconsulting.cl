/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io'],
    formats: ['image/webp'],
  },
  env: {
    postCss: 'production',
    clarity: 'gvy3ijngne',
  },
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
};

module.exports = nextConfig;
