<script>
  export let points;
  export let title;
  export let links;
  export let portrait;

  $: mainLink = links?.[0] ?? null;
</script>

<div class="mt-4">
  <a href={mainLink} target="_blank"
    ><p
      class="text-3xl md:text-2xl font-bold w-auto inline-block
  mb-2 break-words"
    >
      {title}
    </p>
  </a>
  <ul>
    {#each points as point}
      <li>{point}</li>
    {/each}
  </ul>

  <img
    class="object-contain md:object-scale-down h-48 w-full mt-2"
    alt={portrait.title}
    src={portrait.url}
  />
</div>
