<script>
  import { metatags,page } from "@roxi/routify";
  import { TabsTransition } from "@roxi/routify/decorators";
  import Footer from "../components/Footer/Footer.svelte";
  import Nav from "../components/Nav/Nav.svelte";
  import { getTitle,is404 } from "../utils/page";
  /**
   * Dynamic prop to get the current title
   * depending the page
   */
  $: currentRouteTitle = getTitle($page);
  $: _is404 = is404($page);
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

<!-- <Loading /> -->
<header><Nav /></header>

<main
  class="inset container mx-auto
md:mx-auto"
>
  {#if !_is404}
    <div
      class="w-full
    container
  md:w-10/12 m-auto grid grid-cols-6 gap-0 self-center break-word"
    >
      <div
        class="bg-gray-300 mt-4 m-4 mb-0 md:m-0 md:mt-8 p-3 md:p-8 col-span-6 md:col-span-5"
      >
        <slot decorator={TabsTransition} />
      </div>
      <div
        class="bg-gray-300 mt-4 m-4 md:m-0 md:mt-8  p-8 col-span-6 md:col-span-1"
      />
    </div>
  {:else}
    <slot decorator={TabsTransition} />
  {/if}
</main>
<Footer />
