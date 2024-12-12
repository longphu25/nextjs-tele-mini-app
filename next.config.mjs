import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ["@meshsdk/core", "@meshsdk/core-cst", "@meshsdk/react"],
    experimental: {
        after: true,
    },
    reactStrictMode: true,
    webpack: function (config, options) {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true
        }
        return config;
    },
};

export default withNextIntl(nextConfig);
