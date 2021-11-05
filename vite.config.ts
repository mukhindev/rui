import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from 'vite-plugin-mdx';
import highlight from 'remark-prism';
import path from 'path';
import { aliases } from './package.json';

// Забираем алиасы из package.json, приводим к виду { find: replacement },
// Например { '@': 'Users/mukhindev/dev/project/src' }
const getAliases = () => {
  return Object.entries(aliases).reduce((acc, [find, replacement]) => {
    acc[find] = path.resolve(__dirname, replacement.toString());
    return acc;
  }, {} as Record<string, string>);
};

export default defineConfig({
  base: '/rui/',
  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        highlight,
      ],
    }),
  ],
  resolve: {
    alias: getAliases(),
    conditions: [
      'import',
      'module',
      'browser',
    ],
  },
});
