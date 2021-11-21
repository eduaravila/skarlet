<script>
  export let description;
  export let title;
  export let link;
</script>

<a href={link} target="_blank"
  ><p
    class="text-3xl md:text-2xl text-gray-50 dark:text-gray-900 font-bold text-gray-900 w-auto inline-block
    mb-2 break-words"
  >
    {title}
  </p>
</a>
<p>
  {description}
</p>
