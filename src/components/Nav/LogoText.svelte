<script>
  import { page } from "@roxi/routify";
  import { getTitle } from "../../utils/page";

  $: title = getTitle($page);
</script>

<div
  class="flex justify-center font-bold text-5xl text-primary-dark dark:text-primary-light select-none"
>
  <h1>{title}</h1>
</div>
