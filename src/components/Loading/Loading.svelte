<script>
  import { isChangingPage } from "@roxi/routify";
  import anime from "animejs/lib/anime.es.js";

  $: completed = false;

  const transition = {
    in: () =>
      anime({
        targets: ".loading-screen",
        width: "100%", // -> from '28px' to '100%',
        left: "0%",
        easing: "easeInOutQuad",
        direction: "alternate",
        loop: false,
        complete: (anim) => (completed = anim.completed),
      }),

    out: () =>
      anime({
        targets: ".loading-screen",
        width: "100%", // -> from '28px' to '100%',
        left: "100%",
        easing: "easeInOutQuad",
        direction: "alternate",
        loop: false,
        delay: 3000,
      }),
  };

  const squares = Array(84);

  const loadingAnimation = () => {
    anime({
      targets: ".staggering-grid .el",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
      loop: true,
    });
  };

  $: {
    if (!completed) {
      completed = false;
      loadingAnimation();
      transition.in();
    }
    if (!$isChangingPage && completed) {
      transition.out();
    }
  }
</script>

<div
  class="loading-container fixed top-0 w-full h-screen overflow-hidden z-10 pointer-events-none"
>
  <div
    class="loading-screen relative p-0 w-0 h-full bg-gray-100 flex items-center justify-center flex-col"
  >
    <p class="text-6xl mb-8">Loading...</p>
    <div class="staggering-grid sm:w-10/12 lg:w-4/12">
      <div class="grid grid-cols-12 grid-rows-4 gap-3 mx-auto">
        {#each squares as square}
          <div class="h-3 w-3  bg-green-400 transform scale-1 el" />
        {/each}
      </div>
    </div>
  </div>
</div>
