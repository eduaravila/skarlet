<script>
  import { page } from "$app/stores";
  import { getTitle } from "../../utils/page";
  $: title = getTitle($page);
</script>

<div
  class="flex justify-center font-bold text-6xl text-primary-dark dark:text-primary-light select-none"
>
  <h1>{title}</h1>
</div>
