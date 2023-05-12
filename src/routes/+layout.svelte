
<script>
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import "../app.css";
    import Footer from "../components/Footer/Footer.svelte";
    import Nav from "../components/Nav/Nav.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data;
   
    onMount(()=>{
      if (
      browser &&
      (localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return ()=>{
        document.documentElement.classList.remove("dark");        
      }
    })
    
  </script>

<header><Nav /></header>
  
 
  {#if $page?.error !== null}
    <slot/>
  {:else}
      <main
      class="inset container mx-auto
    md:mx-auto"
    >    
    <div
    class="w-full
    container
    md:w-9/12 m-auto grid grid-cols-6 gap-0 self-center break-word"
    >
    <div
      class="bg-gray-300 mt-4 m-4 mb-0 md:m-0 md:mt-8 p-3 md:p-8 col-span-6 md:col-span-6"
    >
      <slot />
    </div>
    <div
      class="bg-gray-300 mt-4 m-4 md:m-0 md:mt-8 p-8 col-span-6 hidden md:col-span-1"
    />
    </div>
    </main>
  {/if}
  

  
<Footer projects={data}/>
