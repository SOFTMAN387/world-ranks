/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["flagcdn.com", "upload.wikimedia.org"],
    },
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;