import express from "express";
import {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/task.js";

const router = express();

//Get request
router.get("/", getAllTasks);
router.get("/:id", getTask);

//Post request
router.post("/create", createTask);

//Patch request
router.patch("/update/:id", updateTask);

//Delete request
router.delete("/:id", deleteTask);

export default router;
