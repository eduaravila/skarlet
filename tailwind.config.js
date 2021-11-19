const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include HTML files
      "./src/**/*.html",
    ],
    enabled: production, // disable purge in dev
  },
  mode: "jit",
  darkMode: "media",
  theme: {
    colors: {
      secondary: {
        light: "rgb(178 178 178)",
        dark: "rgb(9, 12, 16)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugin: {
    preflight: true,
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
