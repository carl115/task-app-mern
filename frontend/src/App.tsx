import { Outlet, Link } from "react-router-dom";
import { FC } from "react";
import { Header } from "./layouts/Header";

export const App: FC<any> = () => {
  return (
    <div className="bg-zinc-800 h-screen overflow-hidden">
      <Header>
        <Link
          className="btn bg-blue-600 text-white px-3 mr-3 py-2 rounded-md hover:bg-blue-700"
          to="create"
        >
          Create
        </Link>
        <Link
          className="btn bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
          to="/"
        >
          View all tasks
        </Link>
      </Header>
      <div className="h-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};
