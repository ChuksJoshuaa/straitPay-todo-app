import moment from "moment";
import { BiTime } from "react-icons/bi";
import { ResultProps } from "../interface";

const Task = ({ task }: { task: ResultProps }) => (
  <div className="w-full h-auto sm:h-[120px] border-2 border-gray-100 shadow-lg mb-5 py-1 px-2">
    <h2 className="text-blue-900 py-1 text-lg font-bold capitalize">
      Title: {task?.title}
    </h2>
    <h2 className="text-gray-700 pb-2 text-md font-normal">
      Description: {task?.description}
    </h2>
    <div className="flex items-center justify-start text-red-400">
      <BiTime className="text-xl" />
      <span className="mx-1">{moment(task?.createdAt).fromNow()}</span>
    </div>
  </div>
);

export default Task;
