<script lang="ts">
//IMPORTS
	import { add, checkDups} from "../resources/store.svelte";

//VARIABLES
    let input = $state<string>("");
    let error = $state<string>("");

//FUNCTIONS
    const addTask = () => {
        if (!checkErr()) {
            add(input)
        }
        
        input = "";
    }
    const checkErr = () => {
        let err = true;
        if (input === "") {
            error = "Cannot be blank"
        } else if (checkDups(input)){
            error = "Task already exists"
        } else {
            err = false
            error = ""
        }
        return err
    }

</script>

<div class="container">
    <input type=text placeholder="add a task..." bind:value={input} />
    <div class="controls">
        <button onclick={addTask}>Add</button>
        <button>Delete All</button>
    </div>
</div>
<div>{error}</div>


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