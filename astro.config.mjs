import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: "https://svgcs.com",
  integrations: [mdx(), sitemap(), tailwind()],
});
