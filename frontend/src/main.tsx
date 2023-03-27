import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
