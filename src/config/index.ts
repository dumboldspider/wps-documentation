// ENVIRONMENT CONSTANTS
export const isProd = process.env.NODE_ENV === "production";
export const GITHUB_URL = "https://github.com";
export const GITHUB_API_URL = "https://api.github.com";
export const RAW_GITHUB_URL = "https://raw.githubusercontent.com";
export const REPO_NAME = "dumboldspider/wps-documentation";
export const CONTENT_PATH = "/main/content";

// SITE CONSTANTS
export const SITE_TITLE = "Wipsie Docs";
export const SITE_DESCRIPTION = "Wipsie Docs";
export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://docs.wipsie.com"
    : "http://localhost:3005";
