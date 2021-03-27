<script>
    import { Router, Route, Link, navigate } from "svelte-routing";

    import Home from "./pages/Home.svelte";
    import Edit from "./pages/Edit.svelte";
    import Add from './pages/Add.svelte';
    import Delete from './pages/Delete.svelte';

    import Navbar from './components/Navbar.svelte'
</script>

<Router>
    <Navbar />
    <div>
        <Route path="/"><Home /></Route>
        <Route path="/add"><Add /></Route>
        <Route path="/edit/:id"><Edit /></Route>
        <Route path="/delete/:id"><Delete /></Route>       
    </div>
</Router>
