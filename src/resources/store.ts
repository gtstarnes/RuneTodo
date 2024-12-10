//IMPORTS
    import type { task } from "./types";

//VARIABLES
    export let tasks = $state<task[]>([])

//FUNCTIONS
    export const add = (newTask: task) => { // adds new task to tasks
        tasks.push(newTask);
    }
    export const del = (task: string) => { // deletes task from tasks
        tasks = tasks.filter(t => {
            return t.task !== task
        })
    }
    export const massDel = () => {
        tasks = tasks.filter(t => {
            return t.done !== true;
        })
    }