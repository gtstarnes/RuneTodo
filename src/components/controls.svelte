<script lang="ts">
//IMPORTS
	import { tasks } from "../resources/store.svelte";

//VARIABLES
    let input = $state<string>("");

    const add = () => {
        const newTask = {task: input, done: false, edit: false}
        tasks.push(newTask)
        input = "";
    }
</script>

<div class="container">
    <input type=text placeholder="add a task..." bind:value={input} />
    <div class="controls">
        <button onclick={add}>Add</button>
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
    button {
        cursor: pointer;
    }
    input {
        width: 85%;
        padding: 1rem;
    }
</style>