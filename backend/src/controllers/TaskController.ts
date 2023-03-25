import { Task } from "../db/models/Task";
import { TaskRequest, TaskData } from "../types";
import {
  requestTitle,
  requestBody,
  requestCheck,
} from "../helpers/TaskRequest";

export const getTasks = async (_req: any, res: any) => {
  const taskFind = await Task.find();

  res.json(taskFind);
};

export const getTask = async (req: any, res: any) => {
  const taskFind = await Task.findById(req.params.id);

  res.json(taskFind);
};

export const createTask = async (req: any, res: any) => {
  try {
    const insertTask: TaskRequest = {
      title: requestTitle(req.body.title),
      body: requestBody(req.body.body),
    };

    await Task.create(insertTask);

    res.json({ message: "Task created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ messageError: "Error creating task" });
  }
};

export const updateTask = async (req: any, res: any) => {
  try {
    const insertTask: TaskData = {
      title: requestTitle(req.body.title),
      body: requestBody(req.body.body),
      check: requestCheck(req.body.check),
    };

    await Task.findByIdAndUpdate(req.params.id, insertTask);

    res.json({ message: "Task updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ messageError: "Error updating task" });
  }
};

export const deleteTask = async (req: any, res: any) => {
  await Task.findByIdAndRemove(req.params.id);

  res.sendStatus(204);
};
