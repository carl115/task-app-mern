import { useEffect, useState } from "react";
import axios from "axios";
import { Task } from "../types";
import { TaskCard } from "../components/TaskCard";

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tasks")
      .then((res) => setTasks(res.data));
  });

  return (
    <>
      {tasks.length == 0 ? (
        <h1 className="text-4xl text-white">There are not tasks yet</h1>
      ) : (
        tasks.map((task) => <TaskCard taskData={task}></TaskCard>)
      )}
    </>
  );
}
