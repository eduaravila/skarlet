<script>
  import { page } from "@roxi/routify";

  const getTitle = (page) => {
    switch (page.title) {
      case "index":
        return "Home";
      default:
        const firts = page.title.charAt(0).toUpperCase();
        const rest = page.title.slice(1);
        return firts + rest;
    }
  };
  $: title = getTitle($page);
</script>

<div
  class="flex justify-center font-bold text-5xl text-primary-dark dark:text-primary-light select-none"
>
  <h1>{title}</h1>
</div>
