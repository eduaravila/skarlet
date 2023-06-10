<script>
  export let href;
  export let target;
  
  target = target ? target : "_self";
</script>

<a
  href={href}
  target={target}
  class="text-primary-dark text-2xl dark:text-gray-50 hover:underline 
  underline-offset-1 no-underline focus:outline-white select-none visited:text-gray-600 visited:dark:text-gray-50 font-bold"
>
  <slot /></a
>
