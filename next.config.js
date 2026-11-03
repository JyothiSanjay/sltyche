const nextConfig = {
  output: 'export', // Tells Next.js to generate static files
  devIndicators: false,
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
