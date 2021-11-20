<script>
  import { metatags,page } from "@roxi/routify";
  import Nav from "../components/Nav/Nav.svelte";
  import { getTitle } from "../utils/page";

  /**
   * Dynamic prop to get the current title
   * depending the page
   */
  $: currentRouteTitle = getTitle($page);
  $: metatags.title = currentRouteTitle;

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
</script>

<header><Nav /></header>
<div class="container mx-auto">
  <main data-barba="container" data-barba-namespace={currentRouteTitle}>
    <slot />
  </main>
</div>
