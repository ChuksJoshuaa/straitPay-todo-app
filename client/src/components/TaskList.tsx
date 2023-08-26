import { useContext } from "react";
import MyContext from "../contexts";
import moment from "moment";
import { BiTime } from "react-icons/bi";

const TaskList = () => {
  const { state } = useContext(MyContext);

  return (
    <div className={`my-2 ${!state.isSidebarOpen ? "mx-6" : "mx-1"}`}>
      <div
        className={`task__container ${
          !state.isSidebarOpen ? "ml-[1em]" : "ml-0"
        }`}
      >
        {state?.result?.data?.map((val, i: number) => (
          <div
            key={i}
            className="w-full h-auto sm:h-[120px] border-2 border-gray-100 shadow-lg mb-5 py-1 px-2"
          >
            <h2 className="text-blue-900 py-1 text-lg font-bold capitalize">
              Title: {val?.title}
            </h2>

            <h2 className="text-gray-700 pb-2 text-md font-normal">
              Description: {val?.description}
            </h2>

            <div className="flex items-center justify-start text-red-400">
              <span>
                <BiTime className="text-xl" />
              </span>
              <span className="mx-1">{moment(val?.createdAt).fromNow()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
