<script context="module">
  import h1 from "../components/H1/H1.svelte";
  import Title from "../components/Title/Title.svelte";
  import ul from "../components/Ul/Ul.svelte";
  export { ul,h1 };
</script>

<script>
  export let title;
  export let author;
  export let date;
</script>

<div>
  <div class="mb-4 container">
    <Title>{title}</Title>
    <div class="flex flex-col md:flex-row md:space-x-2">
      {#if date}
        <p class="date italic">{date}</p>
      {/if}
      <p class="date italic">by: {author}</p>
    </div>
  </div>
  <slot>
    <!-- the mdsvex content will be slotted in here -->
  </slot>
</div>
