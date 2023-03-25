import { useEffect, useState } from "react";
import axios from "axios";
import { Task } from "../types";
import { TaskCard } from "../components/TaskCard";

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tasks")
      .then((res) => setTasks(res.data));
  });
  return (
    <div className="h-full flex text-white flex justify-center items-center">
      {tasks.length == 0 ? (
        <h1 className="text-4xl">There are not tasks yet</h1>
      ) : (
        tasks.map((task) => (
          /*
          <TaskCard
            title={task.title}
            body={task.body}
            check={task.check}
          ></TaskCard>
          */
          <TaskCard taskData={task}></TaskCard>
        ))
      )}
    </div>
  );
}
