import { useEffect, useState } from "react";
import axios from "axios";
import { Task } from "../types";
import { TaskCard } from "../components/TaskCard";
import { getTasks } from '../helpers/localstorage'

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    /*
    axios
    .get("http://localhost:3000/api/tasks")
    .then((res) => setTasks(res.data))
    */
    setTasks(getTasks())
  }, []);

  return (
    <div
      className={`${tasks.length > 10 ? "h-[700px]" : ""} ${
        tasks.length > 0
          ? "grid grid-cols-4 gap-10 overflow-x-hidden overflow-y-auto"
          : ""
      }`}
    >
      {tasks.length == 0 ? (
        <h1 className="text-4xl text-white">There are not tasks yet</h1>
      ) : (
        tasks.map((task) => <TaskCard key={tasks.length + 1} taskData={task}></TaskCard>)
      )}
    </div>
  );
}
