<script>
    import { onMount } from "svelte";
    import { navigate } from 'svelte-routing';
    import axios from "axios";

    const id = location.href.split("/")[4];

    onMount(async () => {
        await axios.delete(`http://localhost:3000/api/${id}`);
        navigate('/')
    });
</script>