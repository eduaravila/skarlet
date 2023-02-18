<script>
  import Link from "./Link.svelte";
  import LogoText from "./LogoText.svelte";
  $: blogUrl = process.env.BLOG_URL;
</script>

<nav
  class="
  bg-secondary-dark
  dark:bg-secondary-light
container
w-full
md:w-9/12
md:mx-auto
self-center
p-8
"
>
  <LogoText />
  <div class="flex justify-center flex-col md:flex-row md:space-x-16 lg:flex-row mt-4 ">
    <Link href={"/"}>home</Link>    
    <Link href={"./lab"}>stuff i have done</Link>
    <Link href={blogUrl}>blog</Link>
  </div>
</nav>
