<script lang="ts">
  import Router from "@roxi/routify/runtime/Router.svelte";
  import { routes } from "../.routify/routes";
  
</script>

<Router {routes} />

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
</style>
