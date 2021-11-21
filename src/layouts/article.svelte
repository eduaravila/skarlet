<script context="module">
  import Title from "../components/Title/Title.svelte";
  import ul from "../components/Ul/Ul.svelte";
  export { ul };
</script>

<script>
  export let title;
  export let author;
  export let date;
</script>

<div>
  <div class="mb-4 container">
    <Title>{title}</Title>
    <div class="flex flex-col md:flex-col">
      <p class="date italic">on: {date}</p>
      <p class="date italic">by: {author}</p>
    </div>
  </div>
  <slot>
    <!-- the mdsvex content will be slotted in here -->
  </slot>
</div>
