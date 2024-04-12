/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "localhost",
      "lh3.googleusercontent.com",
      "doctor-book-admin.onrender.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
