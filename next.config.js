/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.ipfscdn.io',
      'bafybeifmmo646ymfr2dstvl6vehwhmqucgqbszj6x4fkmqnqjy4ccfcfn4.ipfs.cf-ipfs.com',
      '389f71992934141cbe4be69d37e078a8.ipfscdn.io',
    ],
  },
}

module.exports = nextConfig
