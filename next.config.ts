import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Xuất toàn bộ site thành static HTML để host trên Firebase như web tĩnh
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
