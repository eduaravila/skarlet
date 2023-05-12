<script context="module">
  import h1 from "../components/H1/H1.svelte";
  import Title from "../components/Title/Title.svelte";
  import ul from "../components/Ul/Ul.svelte";
  export { ul, h1 };
</script>

<script>
  export let title;
</script>

<div>
  <div class="mb-4 container">
    <Title>{title}</Title>
  </div>
  <slot>
    <!-- the mdsvex content will be slotted in here -->
  </slot>
</div>
