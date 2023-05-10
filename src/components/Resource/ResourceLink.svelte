<script>
    import { operationStore, query } from "@urql/svelte";

    export let sys;

    const q = operationStore(`
    query($id: String!) {
    resource(id: $id){
        url
        label
        image{
            url
            title      
        }
        iconClass
        imageUrl
        }
    }
    `,{id: sys.id});

    query(q);

    $: resource = $q?.data?.resource ?? null;
    $: label = resource?.label ?? null;
    $: url = resource?.url ?? null;
</script>

<div class="w-fit">
    <a href={url} target="_blank" rel="noopener noreferrer">
        <div class="flex gap-2 items-center">
            <section>{label}</section> <section class="text-xs">🔗</section>
        </div>
    </a>
</div>