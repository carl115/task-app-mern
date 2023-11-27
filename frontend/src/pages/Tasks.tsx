import { useEffect, useState } from "react";
import axios from "axios";
import { LocalTask, Task } from "../types";
import { TaskCard } from "../components/TaskCard";
import IonIcon from '@reacticons/ionicons'

export function Tasks() {
  //const [tasks, setTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<LocalTask[]>([]);
  const [load, setLoad] = useState<Boolean>(false);

  useEffect(() => {
    setLoad(true);
    /*
    axios
    .get("http://localhost:3000/api/tasks")
    .then(res => {
      setTasks(res.data);
      setLoad(false);
    });
    */
    const interval = setInterval(() => {
      const data = localStorage.getItem('tasks');
      if(data) {
        setTasks(JSON.parse(data));
        setLoad(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-4 flex justify-center md:px-0">
      <div
        className="bg-zinc-800 w-[600px] h-[85%] px-10 py-10 flex flex-col gap-4 overflow-y-auto overflow-x-hidden relative md:px-16"
      >
        {tasks.length == 0 ? (
          <div className="w-full h-full text-5xl text-white flex justify-center items-center">
            { load ? (<IonIcon className="animate-spin" name="reload"></IonIcon>) : (<h1 className="text-blue-500 text-4xl">There are not tasks yet</h1>) }
          </div>
        ) : (
          tasks.map((task: LocalTask) => <TaskCard key={task.id} taskData={task}></TaskCard>)
        )}
      </div>
    </div>
  );
}
