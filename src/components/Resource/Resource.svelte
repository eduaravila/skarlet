<script>
  import ResourceLink from "./ResourceLink.svelte";

  export let points;
  export let title;
  export let links;
  export let portrait;
  export let resourcesLinksCollection; 

  const items = resourcesLinksCollection?.items ?? [];
  $: mainLink = links?.[0] ?? null;

</script>

<div class="flex flex-col border-b-2 border-black">
  <div class="my-5">
    <p
      class="text-left text-3xl md:text-2xl font-bold w-auto inline-block break-words mb-1"
    >
      {title}
    </p>
  <div>
    <div class="flex-auto ">
      {#each points as point}
        <p class="text-justify line-clamp-3 ">{point}</p>
      {/each}
    </div>
  </div>
    {#each items as resourceLink}
        <ResourceLink {...resourceLink} />
    {/each}
  </div>
  <!-- {#if portrait}
    <img
      class="object-cover md:object-cover h-10 w-full mt-2 flex-1"
      alt={portrait.title}
      src={portrait.url}
    />
  {/if} -->
</div>
