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
    font-family: Monserrat, sans-serif !important;
  }

  @tailwind utilities;

  main.inset {
    bottom: 64px;
    overflow: hidden;
  }
</style>
