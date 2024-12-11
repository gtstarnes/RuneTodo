<script lang="ts">
// IMPORTS
	import type { Task } from "../../resources/types";

// PROPS
    let {task = "", done = false, edit = false}: Task = $props();
</script>

<div>
    <input type="checkbox" bind:checked={done} />
    <div>{task}</div> 
    <button>Del</button>
</div>

<style>

</style>