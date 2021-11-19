<script>
  import Link from "./Link.svelte";
  import LogoText from "./LogoText.svelte";
</script>

<nav
  class="
  bg-secondary-dark
  dark:bg-secondary-light
container
mx-auto
self-center
p-8
"
>
  <LogoText/>
  <div class="flex justify-center space-x-14 mt-4">
    <Link href={"/"}>Home</Link>
    <Link href={"./blog"}>Blog</Link>
    <Link href={"./lab"}>Lab</Link>
    <Link href={"./contact"}>Contact</Link>
  </div>
</nav>
