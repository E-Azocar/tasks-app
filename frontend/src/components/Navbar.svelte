<script>
    import { Link } from "svelte-routing";
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <Link class="navbar-brand" to="/">Svelte App</Link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <Link class="nav-link" to="/">Inicio</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/add">Añadir Tarea</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
