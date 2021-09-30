import autoprefixer from "autoprefixer";
import nesting from "postcss-nesting";
import tailwind from "tailwindcss";

export default {
  syntax: "postcss-scss",
  plugins: [
    // Some plugins, like postcss-nested, need to run before Tailwind
    nesting(),
    tailwind(),

    // But others, like autoprefixer, need to run after

    autoprefixer(),
    // !dev &&
    //  cssnano({
    //      preset: 'default',
    //  }),
  ],
};
