import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { CreateTask } from "../pages/CreateTask";
import { Tasks } from "../pages/Tasks";

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Tasks />,
      },
      {
        path: "create",
        element: <CreateTask />,
      },
    ],
    errorElement: <h1>PAGE NOT FOUND</h1>,
  },
]);