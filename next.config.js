/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/plans',
                destination: '/pricing',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
