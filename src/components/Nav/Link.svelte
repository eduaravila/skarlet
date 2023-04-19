<script>
  import { url } from "@roxi/routify";
  export let href;
  export let target;
</script>

<a
  href={$url(href)}
  target={target}
  class="text-primary-light text-xl dark:text-gray-50 hover:underline 
  underline-offset-1 focus:outline-white select-none visited:text-primary-light visited:dark:text-gray-50"
>
  <slot /></a
>
