import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

const assetPrefix =
  process.env.GITHUB_ACTIONS && repoName
    ? `/${repoName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix,
};

export default nextConfig;
