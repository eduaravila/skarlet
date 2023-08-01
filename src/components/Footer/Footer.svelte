<script>
  export let projects;

  $: items = projects?.data?.socialsCollection?.items ?? [];
  $: year = new Date().getFullYear();
</script>

<footer
  class="footer bottom-0 p-4 h-18	w-full border-b-2 border-green-400 text-primary-dark dark:text-gray-50 text-center my-5"
>  
<a href="/"> Contact info </a>
  <p>©{year} Eduardo Avila.</p>
  <p>made with ❤️</p>
</footer>
