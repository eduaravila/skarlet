<script>
  
    export let sys; 
    export let resource;
    export let label;
    export let url;
    
</script>

<div class="w-fit">
    <a href={url} target="_blank" rel="noopener noreferrer">
        <div class="flex gap-2 items-center">
            <section>{label}</section> <section class="text-xs">🔗</section>
        </div>
    </a>
</div>