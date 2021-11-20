<script>
  import { url } from "@roxi/routify";
  import Image404 from "../components/404/Image404.svelte";
</script>

<div class="flex justify-center flex-col items-center ">
  <h1 class="text-7xl mt-8 bg-gray-100 p-2 rounded-sm">404</h1>
  <Image404 />
  <div class="text-center text-3xl mt-8 error-text isolate">
    Page not found.
    <!-- link to the parent folder of _fallback.svelte -->
    <a
      href={$url("../")}
      class="underline focus:outline-white bg-gray-100 p-2 rounded-sm"
      >Go back</a
    >
  </div>
</div>

<style>
  .error-text {
    font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Lucida Console",
      "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
      "Courier New", monospace, sans-serif;
  }
</style>
