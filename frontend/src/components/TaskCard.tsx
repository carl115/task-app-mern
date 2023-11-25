import { FC, useState, useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import { Task } from "../types";
import { TypeAlert } from "../enums";
import axios from "axios";
import swal from "sweetalert2";
import { setAlert } from "../helpers/alerts";
import { localUpdateTask, localDeleteTask } from "../helpers/localstorage";

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

    /*
    await axios
      .put(`http://localhost:3000/api/tasks/${taskData._id}`, submitTask)
      .then((res) => setAlert(TypeAlert.Success, res.data.message));
    */
    await localUpdateTask(taskData.id, submitTask).then(res => setAlert(TypeAlert.Success, res.message));
  };

  const deleteTask = async () => {
    swal
      .fire({
        icon: "info",
        title: "Are you sure to delete the task?",
        showCancelButton: true,
        confirmButtonText: "Delete it",
      })
      .then((result) => {
        if (result.isConfirmed) {
          /*
          axios
            .delete(`http://localhost:3000/api/tasks/${taskData._id}`)
            .then((res) => console.log(res));
          */
          localDeleteTask(taskData.id);

          setAlert(TypeAlert.Success, "Task deleted successfully");
        }
      });
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
      className={`bg-zinc-700 h-fit p-4 pt-1 text-white border-4 border-blue-600 ${
        check && !isUpdate ? "opacity-60" : "opacity-100"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div
          className={`w-full flex items-center ${
            isUpdate ? "justify-between" : "justify-end"
          }`}
        >
          {isUpdate ? <h3>Editing...</h3> : ""}
          <div className="mb-2 flex items-center justify-between">
            {!isUpdate ? (
              <button 
                type="button" 
                className="text-white text-[21px] pt-1 mr-1 hover:text-blue-600" 
                onClick={() => 
                  !isUpdate ? setIsUpdate(true) : setIsUpdate(false)
                }
              >
                <IonIcon name="pencil-outline"></IonIcon>
              </button>
            ) : (
              <button 
                type="button" 
                className="text-white text-[30px] pt-2 hover:text-blue-600"
                onClick={() =>
                  !isUpdate ? setIsUpdate(true) : setIsUpdate(false)
                }
              >
                <IonIcon name="close"></IonIcon>
              </button>
            )}
            {!isUpdate && (
              <button 
                type="button"
                className="text-[21px] pt-1 mr-1 hover:text-red-600" 
                onClick={deleteTask}
              >
                <IonIcon name="trash-outline"></IonIcon>
              </button>
            )}
            {!isUpdate && (
              <input
                type="checkbox"
                className="w-[18px] h-[18px] mr-2"
                checked={check}
                onChange={handleChangeCheckBox}
              />
            )}
            <button type="submit" className="text-white pt-1 text-[20px] hover:text-blue-600" title="Save">
              <IonIcon name="save"></IonIcon>
            </button>
          </div>
        </div>
        {!isUpdate ? (
          <h1 className="pb-2 text-4xl border-b border-zinc-800 border-b-white">
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
        <div>
          {!isUpdate ? (
            <p style={{overflowWrap: 'anywhere'}} className="text-lg">{body}</p>
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
