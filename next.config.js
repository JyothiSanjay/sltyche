const nextConfig = {
  output: 'export', // Tells Next.js to generate static files
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
