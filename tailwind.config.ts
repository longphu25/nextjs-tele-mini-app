import type { Config } from "tailwindcss";
// const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
// const { join } = require('path');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // content: [
  //   join(
  //     __dirname,
  //     '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
  //   ),
  //   ...createGlobPatternsForDependencies(__dirname),
  // ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
