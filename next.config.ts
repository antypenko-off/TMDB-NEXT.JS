import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "image.tmdb.org" },
            { protocol: "https", hostname: "placehold.co" },
            { protocol: "https", hostname: "avatar.iran.liara.run" },
        ],

    },
}
export default nextConfig;
