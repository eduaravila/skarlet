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
  @tailwind utilities;
  
  a {
    @apply underline text-blue-600 hover:text-blue-800
  }
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
  
</style>
