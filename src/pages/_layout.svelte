<script>
  import { metatags,page } from "@roxi/routify";
  import Nav from "../components/Nav/Nav.svelte";

  $: {
    switch ($page.title) {
      case "index":
        $metatags.title = "Home";
        break;
      default:
        $metatags.title = $page.title;
    }
  }

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

<body
  class="
min-h-screen
bg-secondary-light
text-black
dark:bg-secondary-dark 
dark:text-white
font-sans
bg-grey-900"
>
  <div class="container mx-auto">
    <header><Nav /></header>
    <slot />
  </div>
</body>
