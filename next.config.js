const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  output: 'export',
  transpilePackages: ['geist'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
});
