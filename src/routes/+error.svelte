<script>
    import Image404 from "../components/404/Image404.svelte";
    import Title from "../components/Title/Title.svelte";
  </script>
  
  <div class="w-full md:w-9/12 m-auto">
    <div class="flex justify-center flex-col items-center">
      <Title>404</Title>
      <Image404 />
      <div class="mt-8 error-text flex flex-col items-center md:flex-row">
        <p class="text-primary-light text-3xl dark:text-gray-50">
          Page not found.
        </p>
        <!-- link to the parent folder of _fallback.svelte -->
        <a
          href={"/"}
          class="underline focus:outline-white bg-gray-100 p-2 rounded-sm text-3xl mt-2 md:mt-0"
          >Go back</a
        >
      </div>
    </div>
  </div>
  
  <style>
    .error-text {
      font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Lucida Console",
        "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
        "Courier New", monospace, sans-serif;
    }
  </style>
  