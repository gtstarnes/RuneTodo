//IMPORTS
    import type { Task } from "./types";

//VARIABLES
    let tasks = $state<Task[]>([])

    const del = (task: string) => {
        tasks = tasks.filter(t => {
            return task !== t.task
        })
    }
    const add = (t:string) => {
        tasks.push({task: t, done: false, edit: false})
    }

    export function getTasks() {
        return tasks
    }
//EXPORTS
export { del, add }
