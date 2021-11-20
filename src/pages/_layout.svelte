<script>
  import { metatags,page } from "@roxi/routify";
  import { TabsTransition } from "@roxi/routify/decorators";
  import Loading from "../components/Loading/Loading.svelte";
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

<Loading />

<header><Nav /></header>

<main class="inset">
  {#if !_is404}
    <div
      class="lg:w-5/6
    container
  sm:mx-auto grid grid-cols-6 gap-4 self-center"
    >
      <div class="bg-gray-300 mt-8 rounded-sm p-8 col-span-4">
        <slot decorator={TabsTransition} />
      </div>
      <div class="bg-gray-300 mt-8 rounded-sm p-8 col-span-2" />
    </div>
  {:else}
    <slot decorator={TabsTransition} />
  {/if}
</main>
