import { useEffect, useState } from "react";
import axios from "axios";
import { LocalTask, Task } from "../types";
import { TaskCard } from "../components/TaskCard";

export function Tasks() {
  //const [tasks, setTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<LocalTask[]>([]);

  useEffect(() => {
    /*
    axios
    .get("http://localhost:3000/api/tasks")
    .then((res) => setTasks(res.data))
    */
    const interval = setInterval(() => {
      const data = localStorage.getItem('tasks');
      if(data) {
        setTasks(JSON.parse(data));
      }
    }, 1000);
    return () => clearInterval(interval);
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
        tasks.map((task: LocalTask) => <TaskCard key={task.id} taskData={task}></TaskCard>)
      )}
    </div>
  );
}
