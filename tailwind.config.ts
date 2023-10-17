import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero_image:
          "url('https://img.freepik.com/premium-photo/white-fluffy-cotton-background-abstract-luxury-wadding-cloud-texture_44651-180.jpg?w=740')",
        dark_hero_image:
          "url('https://img.freepik.com/free-photo/amazing-beautiful-sky-with-clouds_58702-1653.jpg?w=826&t=st=1697419030~exp=1697419630~hmac=be88a7c7c64d52f8f8dac53726f3cf8af0cd4c37b4c0213863abc5bd7dcf29fd')",
      },
    },
  },
  plugins: [],
};
export default config
