import { useContext } from "react";
import MyContext from "../contexts";

const TaskList = () => {
  const { state } = useContext(MyContext);
  console.log(state.result);
  return <div>TaskList</div>;
};

export default TaskList;
