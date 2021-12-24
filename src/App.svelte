<script lang="ts">
  import Router from "@roxi/routify/runtime/Router.svelte";
  import { routes } from "../.routify/routes";
  import initGQL from "./client/index";

  initGQL();
</script>

<Router {routes} />

<svelte:head>
  <style></style>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-G4FYKL4YKV"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-G4FYKL4YKV");
  </script>
</svelte:head>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;

  @font-face {
    @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");
  }

  body {
    font-family: Menlo, "Source Code Pro", Monaco, "Lucida Console",
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
