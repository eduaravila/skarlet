<script>
  import Link from "./Link.svelte";
  import LogoText from "./LogoText.svelte";
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
    <Link href={"/"}>Home</Link>
    <Link href={"/about"}>About</Link>
    <Link href={"./blog"}>Blog</Link>
    <Link href={"./donate"}>Donate</Link>
    <Link href={"./lab"}>Lab</Link>
    <Link href={"./contact"}>Contact</Link>
  </div>
</nav>
