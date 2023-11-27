import { Task, LocalTask } from '../types';
import { CreateRequestTask } from "../types";
import ShortUniqueId from 'short-unique-id';

const { randomUUID } = new ShortUniqueId({ length: 10 });

export const localCreateTask = async (newTask: CreateRequestTask) => {
    const localData = localStorage.getItem("tasks")
    let tasks:LocalTask[] = [];
   
    if(localData) {
        tasks = JSON.parse(localData);
        tasks.push({...newTask, id: randomUUID(), check: false});
        await localStorage.setItem("tasks", JSON.stringify(tasks));
        return { message: 'Task created succefully' };
    } 
    else {
        tasks.push({...newTask, id: randomUUID(), check: false});
        await localStorage.setItem("tasks", JSON.stringify(tasks));
        return { message: 'Task created succefully' };
    }
}

export const localUpdateTask = async (id: any, task: Task) => {
    const localData = localStorage.getItem("tasks");
    let tasks:LocalTask[] = localData ? JSON.parse(localData) : [];
    let taskFilter = tasks.filter((task: LocalTask) => task.id != id)
    
    taskFilter.push({...task, id});
    await localStorage.setItem("tasks", JSON.stringify(taskFilter));

    return { message: 'Task updated succefully' };
}

export const localDeleteTask = async (id: any) => {
    const localData = localStorage.getItem("tasks");
    let tasks:LocalTask[] = localData ? JSON.parse(localData) : [];
    let tasksFilter = tasks.filter((task: LocalTask) => task.id != id);

    await localStorage.setItem("tasks", JSON.stringify(tasksFilter));

    return { message: 'Task deleted succefully' };
}