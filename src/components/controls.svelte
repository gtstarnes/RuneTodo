<script lang="ts">
//IMPORTS
//VARIABLES
    let newTask = $state<string>("add a task...");
</script>

<div class="container">
    <input type=text placeholder="add a task..." bind:value={newTask} />
    <div class="controls">
        <button>Add</button>
        <button>Delete All</button>
    </div>

</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        height: 2.5rem;
    }
    .controls {
        display: flex;
        width: 15%
    }
    input {
        width: 85%;
        padding: 1rem;
    }
</style>