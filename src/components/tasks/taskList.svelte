<script lang="ts">
//IMPORTS
	import { getTasks } from "../../resources/store.svelte";
	import Task from "./task.svelte";
    
//VARIABLES
    let tasks = $derived(getTasks())
</script>

<div class="container">
    {#if tasks.length === 0}
        <div>Task List is empty</div>
    {:else}
        {#each tasks as task (task.task)}
            <Task {...task} />
        {/each}
    {/if}
</div>

<style>

</style>