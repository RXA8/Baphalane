import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //Images from supabase storage https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/background-images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tqnkaadrdfkhxxbaympr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/background-images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
