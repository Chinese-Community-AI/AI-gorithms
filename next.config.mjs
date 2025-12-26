import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure `pageExtensions` to include MDX files
  // This tells Next.js to treat .mdx files as pages
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// Wrap the config with MDX
// For Next.js 16 with Turbopack, we use a simpler configuration
// Plugins like remark-gfm will be configured in mdx-components.tsx if needed
const withMDX = createMDX({
  // Note: In Next.js 16 with Turbopack, we can't pass non-serializable options here
  // We'll handle remark-gfm and other plugins differently if needed
});

// Merge MDX config with Next.js config
// This exports the final configuration
export default withMDX(nextConfig);
