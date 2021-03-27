<script>
    import { Link } from "svelte-routing";
    export let task;
</script>

<div class="col-md-4 p-3 task">
    <div class="card">
        <div class="card-header fs-4">
            <div class="task-title">
                {task.title}
            </div>
        </div>
        <div class="card-body p-3">
            {task.content}
        </div>
        <div class="card-footer">
            <Link to={`/edit/${task._id}`} class="btn btn-primary">
                <i class="bx bx-pencil" />
            </Link>
            <Link to={`/delete/${task._id}`} class="btn btn-danger">
                <i class="bx bx-trash" />
            </Link>
        </div>
    </div>
</div>

<style>
    div.task {
        height: 100%;
    }
</style>
