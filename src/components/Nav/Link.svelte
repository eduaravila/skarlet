<script>
  import { url } from "@roxi/routify";
  export let href;
</script>

<a href={$url(href)} class="underline"> <slot /></a>
