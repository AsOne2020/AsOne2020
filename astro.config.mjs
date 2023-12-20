import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import icon from "astro-icon";
import Compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
import rehypeKatex from "rehype-katex";
import Color from 'colorjs.io';
import remarkMath from "remark-math";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

const oklchToHex = function (str) {
  const DEFAULT_HUE = 250;
  const regex = /-?\d+(\.\d+)?/g;
  const matches = str.string.match(regex);
  const lch = [matches[0], matches[1], DEFAULT_HUE];
  return new Color("oklch", lch).to("srgb").toString({
    format: "hex"
  });
};

// https://astro.build/config
export default defineConfig({
  site: 'https://fuwari.vercel.app/',
  base: '/',
  integrations: [tailwind(), icon({
    include: {
      'material-symbols': ['*'],
      'fa6-brands': ['*'],
      'fa6-regular': ['*'],
      'fa6-solid': ['*']
    }
  })],
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [rehypeKatex, rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: {
        className: ['anchor']
      },
      content: {
        type: 'element',
        tagName: 'span',
        properties: {
          className: ['anchor-icon']
        },
        children: [{
          type: 'text',
          value: '#'
        }]
      }
    }]]
  },
  redirects: {
    '/': '/page/1'
  },
  vite: {
    plugins: [yaml()],
    css: {
      preprocessorOptions: {
        stylus: {
          define: {
            oklchToHex: oklchToHex
          }
        }
      }
    }
  }
});