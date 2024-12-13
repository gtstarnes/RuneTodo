<script lang="ts">
	import { tasks } from "../../resources/store.svelte";
	import Task from "./task.svelte";


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