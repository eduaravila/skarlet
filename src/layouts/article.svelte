<script>
  import Title from "../components/Title/Title.svelte";

  export let title;
  export let author;
  export let date;
</script>

<div class="mb-4 container">
  <Title>{title}</Title>
  <div class="grid grid-cols-2 gap-2">
    <p class="date italic">on: {date}</p>
    <p class="date italic">by: {author}</p>
  </div>
</div>
<slot>
  <!-- the mdsvex content will be slotted in here -->
</slot>
