<script lang="ts">
  import Router from "@roxi/routify/runtime/Router.svelte";
  import { routes } from "../.routify/routes";
</script>

<Router {routes} />

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");
  </style>
</svelte:head>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;

  @font-face {
    font-family: "Monserrat";
    src: local("Monserrat"),
      url("/assets/Monserrat/Montserrat-Black.ttf") format("ttf");
  }

  body {
    font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Lucida Console",
      "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
      "Courier New", monospace, sans-serif !important;
    position: unset;
    margin-bottom: 6rem !important;
  }
  a {
    color: rgb(0, 100, 200);
  }
  @layer base {
    ul,
    ol,
    li {
      list-style: revert;
      margin: auto;
      padding: revert;
    }
  }
  @tailwind utilities;

  main.inset {
    bottom: 64px;
  }
  html {
    position: relative !important;
    min-height: 100%;
    height: unset !important;
  }
</style>
