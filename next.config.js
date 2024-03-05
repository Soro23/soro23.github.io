/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    assetPrefix: 'https://soro23.github.io/'
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
}

export default nextConfig
