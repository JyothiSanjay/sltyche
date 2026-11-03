/** @type {import('next').NextConfig} */
const nextConfig = { 
    output: 'export', // Tells Next.js to generate flat static files
    base: '/sltyche.github.io/', // Base path for the static files
  devIndicators: false,
  images: {
    unoptimized: true, // Required for static exports since Vercel's optimization server won't be present
  },
 };

export default nextConfig;



