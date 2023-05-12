<script>
  export let href;
  export let target;

  target = target ? target : "_self";
</script>

<a
  href={href}
  target={target}
  class="text-primary-light text-xl dark:text-gray-50 hover:underline 
  underline-offset-1 focus:outline-white select-none visited:text-primary-light visited:dark:text-gray-50"
>
  <slot /></a
>
