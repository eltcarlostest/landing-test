// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        koromiko: {
          50: "#fff9ed",
          100: "#fff1d4",
          200: "#ffdfa9",
          300: "#ffbd59",
          400: "#fea439",
          500: "#fc8713",
          600: "#ed6c09",
          700: "#c55109",
          800: "#9c4010",
          900: "#7e3610",
          950: "#441a06",
        },
        "governor-bay": {
          50: "#eff5fe",
          100: "#e3ebfc",
          200: "#ccdaf9",
          300: "#acc1f5",
          400: "#8ba0ee",
          500: "#6f80e5",
          600: "#545cd7",
          700: "#4348bd",
          800: "#3a3f99",
          900: "#353a7a",
          950: "#1f2147",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              50: "#eff5fe",
              100: "#e3ebfc",
              200: "#ccdaf9",
              300: "#acc1f5",
              400: "#8ba0ee",
              500: "#6f80e5",
              600: "#545cd7",
              700: "#4348bd",
              800: "#3a3f99",
              900: "#353a7a",
              DEFAULT: "#6f80e5",
              foreground: "#fff",
            },
            secondary: {
              50: "#fff9ed",
              100: "#fff1d4",
              200: "#ffdfa9",
              300: "#ffbd59",
              400: "#fea439",
              500: "#fc8713",
              600: "#ed6c09",
              700: "#c55109",
              800: "#9c4010",
              900: "#7e3610",
              DEFAULT: "#fc8713",
              foreground: "#fff",
            },
          },
        },
      },
    }),
  ],
};
