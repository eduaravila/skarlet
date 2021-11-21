<script>
  export let title;
  export let autor;
  export let createdAt;
  export let description;
  export let timeToRead;
  export let autorPage;
  export let slug;
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  $: date = new Date(createdAt).toLocaleString(options);
  $: articleURL = process.env.BLOG_URL + slug;
</script>

<div class="mt-4 border-b-2 border-gray-500 pb-4">
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
      <p class="date italic">{date}</p>
    {/if}
    <a href={autorPage}>by: {autor}</a>
  </div>
  {#if timeToRead}
    <p>minutes: {timeToRead}</p>
  {/if}
  {#if description}
    <p>{description}</p>
  {/if}
</div>
