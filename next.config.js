/** @type {import('next').NextConfig} */
const nextConfig = { 
    output: 'export', // Tells Next.js to generate flat static files
   basePath: '/sltyche',
  assetPrefix: '/sltyche/',
  images: {
    unoptimized: true, // Required for static exports since Vercel's optimization server won't be present
  },
 };

export default nextConfig;



