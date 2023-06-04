/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();
const nextConfig = {}
const path = require('path');

module.exports = withNextIntl({
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: { appDir: true, serverActions: false }
});