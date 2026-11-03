/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProduction ? "/sltyche" : "",
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;