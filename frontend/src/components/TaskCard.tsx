import { FC, useState, useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import { Task } from "../types";
import axios from "axios";

export const TaskCard: FC<any> = ({ taskData }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [check, setCheck] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const submitTask: Task = {
      title,
      body,
      check,
    };

    setIsUpdate(false);

    await axios
      .put(`http://localhost:3000/api/tasks/${taskData._id}`, submitTask)
      .then((res) => console.log(res));
  };

  const deleteTask = async () => {
    await axios
      .delete(`http://localhost:3000/api/tasks/${taskData._id}`)
      .then((res) => console.log(res));
  };

  const handleChangeCheckBox = (e: any) => {
    setCheck(e.target.checked);
  };

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleChangeBody = (e: any) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    setTitle(taskData.title);
    setBody(taskData.body);
    setCheck(taskData.check);
  }, []);

  return (
    <div
      className={`w-80 p-4 pt-2 border border-white rounded-md ${
        check && !isUpdate ? "opacity-40" : "opacity-100"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div className="w-full flex justify-end">
          <div className="mb-2 text-xl flex items-center justify-around">
            <button
              type="button"
              className="text-sky-600 mx-1"
              title="Edit"
              onClick={() =>
                !isUpdate ? setIsUpdate(true) : setIsUpdate(false)
              }
            >
              <IonIcon name="create"></IonIcon>
            </button>
            <button
              type="button"
              className="text-red-600 mx-1"
              title="Delete"
              onClick={deleteTask}
            >
              <IonIcon name="trash"></IonIcon>
            </button>
            {!isUpdate && (
              <input
                type="checkbox"
                className="w-4 h-4 mx-1"
                checked={check}
                onChange={handleChangeCheckBox}
              />
            )}
            <button type="submit" className="ml-1" title="Save">
              <IonIcon name="save"></IonIcon>
            </button>
          </div>
        </div>
        <div>
          {!isUpdate ? (
            <h1 className="pb-2 text-4xl border border-zinc-800 border-b-white">
              {title}
            </h1>
          ) : (
            <input
              type="text"
              value={title}
              className="bg-transparent w-full mb-2 h-auto text-4xl border border-zinc-600"
              onChange={handleChangeTitle}
            />
          )}
        </div>
        <div>
          {!isUpdate ? (
            <p className="text-lg">{body}</p>
          ) : (
            <textarea
              className="bg-transparent w-full text-lg border border-zinc-600 resize-none"
              onChange={handleChangeBody}
              value={body}
            ></textarea>
          )}
        </div>
      </form>
    </div>
  );
};
