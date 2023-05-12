<script>
  import { PUBLIC_BLOG_URL, PUBLIC_RESUME_URL } from '$env/static/public';
  import Link from "./Link.svelte";
  import LogoText from "./LogoText.svelte";
 
  $: blogUrl = PUBLIC_BLOG_URL;
  $: resumeHREF = PUBLIC_RESUME_URL? PUBLIC_RESUME_URL : "/eduardo-avila-resume.pdf";
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
    <Link href={"/"} >about</Link>    
    <Link href={"work"}>work</Link>
    <Link href={blogUrl} target="_blank">blog</Link>
    <Link target="_blank"  href={resumeHREF}>resume</Link>
  </div>
</nav>
