<script>
  import { url } from "@roxi/routify";
  export let href;
</script>

<a
  href={$url(href)}
  class="text-primary-light text-xl dark:text-gray-50 hover:underline focus:outline-white select-none visited:text-primary-light visited:dark:text-gray-50"
>
  <slot /></a
>
