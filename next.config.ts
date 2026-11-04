import type { NextConfig } from 'next';
// The supplied photographs are already resized and compressed as local WebP files.
// Serve them directly, avoiding a second encoding pass when a visitor opens a gallery.
const config: NextConfig = { poweredByHeader: false, images: { unoptimized: true } };
export default config;
