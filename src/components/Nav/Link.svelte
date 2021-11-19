<script>
  import { url } from "@roxi/routify";
  export let href;
</script>

<a
  href={$url(href)}
  class="text-primary-light text-xl dark:text-gray-50 hover:underline visited:text-kwai-light focus:outline-white select-none"
>
  <slot /></a
>
