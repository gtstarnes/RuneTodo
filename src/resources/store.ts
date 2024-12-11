//IMPORTS
    import type { Task } from "./types";

//VARIABLES
    let tasks = $state<Task[]>([])

//FUNCTIONS
    const add = (newTask: Task) => { // adds new task to tasks
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
