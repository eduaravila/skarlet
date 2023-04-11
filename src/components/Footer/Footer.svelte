<script>
  import { operationStore, query } from "@urql/svelte";
    
const projects = operationStore(`
  query {
  socialsCollection{
    items{
      url
      urlname
    }
  }
}
  `);

  query(projects);

  $: items = $projects?.data?.socialsCollection?.items ?? [];
  $: year = new Date().getFullYear();
</script>

<footer
  class="footer absolute bottom-0 p-4 h-18	w-full border-b-2 border-green-400 text-primary-light dark:text-gray-50 text-center"
>
  <div class="flex gap-2 justify-center">
  {#each items as socialLink}
    <div >
      <a href={socialLink.url} target="_blank" rel="noopener noreferrer" class="underline text-primary-light dark:text-gray-50">
        {socialLink.urlname}
      </div>
  {/each}
  </div>
  <p>©{year} Eduardo Avila.</p>
  <p>made with ❤️</p>
</footer>
