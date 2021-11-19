<script>
  import Nav from "../components/Nav/Nav.svelte";

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
  dark
h-full
w-full
bg-secondary-light
text-black
dark:bg-secondary-dark 
dark:text-white"
>
  <div class="container mx-auto">
    <header><Nav /></header>
    <slot />
  </div>
</body>
