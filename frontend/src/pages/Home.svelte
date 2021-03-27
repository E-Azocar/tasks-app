<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    import axios from 'axios'
    import Card from "../components/Task.svelte";

    let data = [];
    const pageName = "Home";

    onMount(async () => {
        const res = await axios.get("http://localhost:3000/api/")
        data = res.data
    });
</script>

<div class="container">
    {#if data.length > 0}
        <div class="row">
            {#each data as task}
                <Card task={task} />
            {/each}
        </div>
    {/if}
</div>
