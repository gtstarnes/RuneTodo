//IMPORTS
    import type { task } from "./types";

//VARIABLES
    let tasks = $state<task[]>([])

//FUNCTIONS
    const add = (newTask: task) => { // adds new task to tasks
        tasks.push(newTask);
    }
    const del = (task: string) => { // deletes task from tasks
        tasks = tasks.filter(t => {
            return t.task !== task
        })
    }
    const massDel = () => { // deletes all completed tasks
        tasks = tasks.filter(t => {
            return t.done !== true;
        })
    }

//EXPORTS
export {tasks, add, del, massDel}
