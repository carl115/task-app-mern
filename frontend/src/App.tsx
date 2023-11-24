import { Outlet, Link } from "react-router-dom";
import { FC } from "react";
import { Header } from "./layouts/Header";

export const App: FC<any> = () => {
  return (
    <div className="bg-[url('./assets/background-image.jpg')] bg-cover h-screen overflow-hidden">
      <Header>
        <h1 className="text-4xl text-white">Task app</h1>
        <div>
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
        </div>
      </Header>
      <div className="h-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};
