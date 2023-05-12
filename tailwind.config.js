const production = !process.env.ROLLUP_WATCH;
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include HTML files
      "./src/**/*.html",
      "./src/**/*.svx",
      "./src/**/*.ts",
    ],
    enabled: production, // disable purge in dev
  },
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(255	255	255)",
          dark: "black",
        },
        secondary: {
          light: "rgb(9, 12, 16)",
          dark: "rgb(178 178 178)",
        },
        kwai: {
          light: "#ce5065",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        tiny: ".5rem",
        super_tiny: ".2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugin: {
    preflight: true,
    transform: true,
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
