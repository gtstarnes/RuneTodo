//IMPORTS
    import type { task } from "./types";

//VARIABLES
    export let tasks = $state<task[]>([])

//FUNCTIONS
    export const add = (newTask: task) => {
        tasks.push(newTask);
    }