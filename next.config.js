/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "plus.unsplash.com",
            "images.unsplash.com",
            "flowbite.s3.amazonaws.com"
        ],
    },
}

module.exports = nextConfig
