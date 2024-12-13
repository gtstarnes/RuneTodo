<script lang="ts">
// IMPORTS
	import type { Task } from "../../resources/types";
    import { del } from "../../resources/store.svelte";

// PROPS
    let {task = "", done = false, edit = false}: Task = $props();
</script>

<div>
    <input type="checkbox" bind:checked={done} />
    <div>{task}</div> 
    <button onclick={()=>del(task)}>Del</button>
</div>

<style>

</style>