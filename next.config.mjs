const isProd = process.env.NODE_ENV === "production";

// ✅ MUST match your GitHub repo name
const basePath = isProd ? "/golden-mills" : "";

const nextConfig = {
  output: "export", // ✅ REQUIRED for GitHub Pages

  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;