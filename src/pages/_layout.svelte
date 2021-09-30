<script>
  import Nav from "../components/nav/Nav.svelte";

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
</script>

<body
  class="
  dark
h-full
w-full
bg-white
text-black
dark:bg-gray-800 
dark:text-white"

>
  <div class="container mx-auto">
    <header><Nav /></header>
    <slot />
  </div>
</body>
