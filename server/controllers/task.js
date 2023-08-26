import Task from "../models/task.js";
import mongoose from "mongoose";
import StatusCodes from "http-status-codes";

// create task
export const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    if (title === "" || description === "") {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "All fields are required" });
    } else {
      const newPost = new Task({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      await newPost.save();
      res.status(StatusCodes.CREATED).json({ data: newPost });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};

//get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ _id: -1 });
    res.status(StatusCodes.OK).json({ data: tasks, count: tasks.length });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};

//get single task
export const getTask = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(StatusCodes.NOT_FOUND).send(`No task with id: ${_id}`);
  }

  try {
    const task = await Task.findById(_id);
    res.status(StatusCodes.OK).json({ data: task });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};

//Update task
export const updateTask = async (req, res) => {
  const { id: _id } = req.params;

  const { title, description } = req.body;

  if (title === "" || description === "") {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "All fields are required" });
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(StatusCodes.NOT_FOUND).send(`No task with id: ${_id}`);
    } else {
      const updatedTask = await Task.findByIdAndUpdate(
        _id,
        { title, description },
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(StatusCodes.OK).json({ data: updatedTask });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};

//Delete task
export const deleteTask = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(StatusCodes.NOT_FOUND).send(`No task with id: ${_id}`);
  } else {
    await Task.findByIdAndDelete(_id);
  }
  res.status(StatusCodes.OK).send("Task was deleted Successfully");
};
