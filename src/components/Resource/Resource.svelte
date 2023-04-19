<script>
  export let points;
  export let title;
  export let links;
  export let portrait;

  $: mainLink = links?.[0] ?? null;
</script>

<div class="mt-4 flex flex-col">
  <a href={mainLink} target="_blank" class="text-left"
    ><p
      class="text-left text-3xl md:text-2xl font-bold w-auto inline-block
  mb-2 break-words"
    >
      {title}
    </p>
  </a>
  <div>
    <div class="flex-auto h-16">
      {#each points as point}
        <p class="text-justify line-clamp-3 ">{point}</p>
      {/each}
    </div>
  </div>

  <!-- {#if portrait}
    <img
      class="object-cover md:object-cover h-10 w-full mt-2 flex-1"
      alt={portrait.title}
      src={portrait.url}
    />
  {/if} -->
</div>
