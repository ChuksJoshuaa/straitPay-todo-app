import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import MyContext from "../contexts";
import { ADDDATA, SETID } from "../constants/actionTypes";
import { serverUrl } from "../routes";
import { ResultProps } from "../interface";
import { ErrorPopup, SuccessPopup } from "../utils/notification";

const TaskButton = ({ id }: { id: string }) => {
  const { dispatch } = useContext(MyContext);
  const editBtn = (val: string) => dispatch({ type: SETID, payload: val });

  const deleteBtn = async (val: string) => {
    try {
      await fetch(`${serverUrl}/api/v1/tasks/${val}`, {
        method: "DELETE",
      });
      SuccessPopup("Success, Task deleted");
      dispatch({ type: ADDDATA, payload: {} as ResultProps });
    } catch (error) {
      ErrorPopup("Sorry, an error occurred");
      console.log(error);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded"
        onClick={() => editBtn(id)}
      >
        <FaEdit />
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
        onClick={() => deleteBtn(id)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default TaskButton;
