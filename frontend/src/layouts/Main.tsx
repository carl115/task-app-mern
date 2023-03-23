import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  title: string;
  body: string;
  check: boolean;
}

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
        <h1>There are not tasks yet</h1>
      ) : (
        tasks.map((task) => (
          <div>
            <h1>{task.title}</h1>
            <p>{task.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
