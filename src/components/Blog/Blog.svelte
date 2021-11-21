<script>
  export let title;
  export let autor;
  export let createdAt;
  export let description;
  export let timeToRead;
  export let autorPage;
  export let slug;

  $: articleURL = process.env.BLOG_URL + slug;
</script>

<div class="mt-4">
  <a href={articleURL} target="_blank"
    ><p
      class="text-3xl md:text-2xl font-bold w-auto inline-block
    mb-2 break-words"
    >
      {title}
    </p>
  </a>
  <div class="flex flex-col md:flex-row md:space-x-2">
    {#if createdAt}
      <p class="date italic">on: {createdAt}</p>
    {/if}
    <a href={autorPage}>{autor}</a>
  </div>
  <p>{timeToRead}</p>
  <p>{description}</p>
</div>
