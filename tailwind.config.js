import defaultConfig from './design-system/tailwind.config.cjs';
import { convertPalettteToTailwind, baseColors, colors as c2 } from './design-system/src/colors.js';
import { colors } from './theme/colors.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [
    defaultConfig
  ],
  theme: {
    colors: {
      ...baseColors,
      ...convertPalettteToTailwind(colors),
      gray: convertPalettteToTailwind(c2).gray
    },
    extend: {
      colors: {
        primary: convertPalettteToTailwind(colors).purple,
      }
    }
  },
  plugins: [],
}
