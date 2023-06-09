import express from "express";
import tasks from "./routes/tasks.routes";
import connectDB from "./db/db";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.set("port", 3000);

connectDB();

app.use("/api/tasks", tasks);

app.listen(app.get("port"), () =>
  console.log(`Server listening on port ${app.get("port")}`)
);
