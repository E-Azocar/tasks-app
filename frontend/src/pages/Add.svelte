<script>
    import { navigate } from 'svelte-routing';
    import axios from "axios";

    let data = {
        title: '',
        content: ''
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(data)
        const res = await axios.post(`http://localhost:3000/api/`, data)
        navigate('/')
    }
</script>

<div class="container">
    <div class="col-md-6 card mx-auto mt-5">
        <div class="card-body">
            <form on:submit={submitHandler}>
                <div class="mb-3">
                    <label for="title" class="form-label">Titulo</label>
                    <input
                        type="text"
                        class="form-control"
                        id="title"
                        bind:value={data.title}
                        autocomplete="off"
                    />
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Contenido</label>
                    <textarea
                        class="form-control"
                        rows="4"
                        id="content"
                        bind:value={data.content}
                    />
                </div>
                <button type="submit" class="btn btn-primary col-12"
                    >Guardar Tarea</button
                >
            </form>
        </div>
    </div>
</div>
