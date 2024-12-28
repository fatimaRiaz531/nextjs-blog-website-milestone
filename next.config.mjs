// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // ... other ESLint options
      dirs: ['.'], // Include the root directory
    },
  };
  
  module.exports = nextConfig;