import { useContext } from "react";
import MyContext from "../contexts";

import { Loader, Task } from ".";

const NoTasksMessage = ({ searchTerm }: { searchTerm: string }) => (
  <div className="text-gray-800 text-center text-lg">
    {searchTerm
      ? `No tasks found for "${searchTerm}"`
      : "You currently have no tasks. Create your first task"}
  </div>
);

const TaskList = () => {
  const { state } = useContext(MyContext);

  if (state.loading) return <Loader />;

  if (state.searchData.length === 0)
    return <NoTasksMessage searchTerm={state.searchTerm} />;

  return (
    <div
      className={`my-2 ${!state.isSidebarOpen ? "mx-6 ml-[1em]" : "mx-1 ml-0"}`}
    >
      <h3 className="pb-3 text-left text-lg font-bold capitalize">
        All Tasks ({state?.searchData.length})
      </h3>
      <div className="task__container">
        {state?.searchData?.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
