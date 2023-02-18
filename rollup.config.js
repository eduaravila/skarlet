import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import { mdsvex } from "mdsvex";
import css from "rollup-plugin-css-only";
import livereload from "rollup-plugin-livereload";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

const CONTENFUL_SPACE = process.env.CONTENFUL_SPACE;
const CONTENFUL_ENVIRONMENT = process.env.CONTENFUL_ENVIRONMENT;
const CONTENFUL_ACCESS_TOKEN = process.env.CONTENFUL_ACCESS_TOKEN;
const BLOG_URL = process.env.BLOG_URL;
const SITE = process.env.SITE;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev", "--cors"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "esm",
    name: "app",
    dir: "public/build",
  },
  plugins: [
    svelte({
      extensions: [".svelte", ".svx", ".mjs,"],
      preprocess: [
        sveltePreprocess({
          sourceMap: !production,
          postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")()],
          },
        }),
        mdsvex({
          layout: {
            article: "/src/layouts/article.svelte",
            page: "/src/layouts/page.svelte",
          },
        }),
      ],
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      preferBuiltins: true,
      browser: true,
      dedupe: ["svelte"],
      extensions: [".mjs,", ".js", ".json"],
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
    replace({
      process: JSON.stringify({
        env: { ...process.env },
      }),
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.CONTENFUL_SPACE": JSON.stringify(CONTENFUL_SPACE),
      "process.env.CONTENFUL_ENVIRONMENT": JSON.stringify(
        CONTENFUL_ENVIRONMENT
      ),
      "process.env.CONTENFUL_ACCESS_TOKEN": JSON.stringify(
        CONTENFUL_ACCESS_TOKEN
      ),
      "process.env.BLOG_URL": JSON.stringify(BLOG_URL),
      "process.env.SITE": JSON.stringify(SITE),


      preventAssignment: true,
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
