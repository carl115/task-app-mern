import { useState } from "react";
import axios from "axios";
import { CreateRequestTask } from "../types";
import { TypeAlert } from "../enums";
import { setAlert } from "../helpers/alerts.js";
import { localCreateTask } from '../helpers/localstorage'

export function CreateTask() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newTask: CreateRequestTask = {
      title,
      body,
    };

    /*
    await axios
      .post("http://localhost:3000/api/tasks/", newTask)
      .then((res) => setAlert(TypeAlert.Success, res.data.message))
    */
    await localCreateTask(newTask).then(res => setAlert(TypeAlert.Success, res.message));

    setTitle("");
    setBody("");
  };

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleChangeBody = (e: any) => {
    setBody(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-700 w-80 p-4 flex flex-col rounded-sm"
    >
      <h2 className="text-white text-3xl mb-5">Create a task</h2>
      <div className="rounded-md mb-5">
        <input
          type="text"
          name="title"
          className="block bg-zinc-500 w-full rounded-md border-0 p-1.5 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="Title"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <textarea
        name="body"
        className="block bg-zinc-500 w-full h-28 mb-5 rounded-md border-0 p-1.5 text-white resize-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
        placeholder="Body"
        value={body}
        onChange={handleChangeBody}
      ></textarea>
      <button
        className="btn bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
        type="submit"
      >
        Crear
      </button>
    </form>
  );
}
