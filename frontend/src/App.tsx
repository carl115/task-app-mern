import { Outlet, Link } from "react-router-dom";
import { FC, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { Header } from "./layouts/Header";

export const App: FC<any> = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false)
  return (
    <div className="bg-[url('imgs/background-image.jpg')] bg-cover h-screen overflow-hidden">
      <div className={`bg-slate-800/80 backdrop-blur-md pl-10 pr-5 pt-3 h-screen ${openMenu ? 'absolute' : 'hidden'} right-0 z-50`}>
        <div className="w-full text-white text-4xl text-right mb-10">
          <button type="button" onClick={() => setOpenMenu(false)}>
            <IonIcon name="close"></IonIcon>
          </button>
        </div>
        <Link
          className="text-white text-2xl block mb-10"
          to="create"
        >Create</Link>
        <Link
          className="text-white text-2xl block"
          to="/"
        >View all tasks</Link>
      </div>
      <Header>
        <h1 className="text-4xl text-white flex items-center">Task app <IonIcon name="reader-outline"></IonIcon></h1>
        <button type="button" className="w-10 h-10 text-xl text-white border-2 border-white rounded-sm flex justify-center items-center lg:hidden" onClick={() => setOpenMenu(true)}>
          <IonIcon name="filter-outline"></IonIcon>
        </button>
        <div className="hidden lg:block">
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
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};
