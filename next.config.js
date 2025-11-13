/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [
      { source: '/generate-report', destination: 'https://platform.intelliprop.com.au', permanent: false },
      { source: '/app/:path*', destination: 'https://platform.intelliprop.com.au/:path*', permanent: false },
      { source: '/platform/:path*', destination: 'https://platform.intelliprop.com.au/:path*', permanent: false }
    ];
  }
};

module.exports = nextConfig;


