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
  darkMode: 'class',
  theme: {
    extend: {},
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
