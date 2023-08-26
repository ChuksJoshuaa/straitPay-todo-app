import { useState } from "react";
import moment from "moment";
import { BiTime } from "react-icons/bi";
import { ResultProps } from "../interface";
import { TaskButton, TaskModal } from ".";

const Task = ({ task }: { task: ResultProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-auto sm:h-[145px] border-2 border-gray-100 shadow-lg mb-5 py-1 px-2">
      <h2 className="text-blue-900 leading-6 py-1 text-lg font-medium capitalize border-b border-gray-200">
        Title: {task?.title}
      </h2>
      <h2 className="text-gray-700 py-2 text-md font-normal">
        Description:{" "}
        {task?.description.length > 45
          ? `${task?.description.slice(0, 45)}...`
          : task?.description}
        {task?.description.length > 45 ? (
          <span
            onClick={handleViewClick}
            className="text-green-800 font-semibold text-md cursor-pointer capitalize"
          >
            View
          </span>
        ) : (
          ""
        )}
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start text-red-400">
          <BiTime className="text-xl" />
          <span className="mx-1">{moment(task?.createdAt).fromNow()}</span>
        </div>
        <TaskButton id={task?._id} />
      </div>
      {isModalOpen && <TaskModal task={task} onClose={handleCloseModal} />}
    </div>
  );
};

export default Task;
