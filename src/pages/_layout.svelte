<script>
  import Nav from "../components/nav/Nav.svelte";
</script>

<body
  class="
h-full
w-full
bg-yellow-50
"
>
  <div class="container mx-auto">
    <header><Nav /></header>
    <slot />
  </div>
</body>
