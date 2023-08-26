import {
  LOADING,
  OPENSIDEBAR,
  SAVEDATA,
  SETSCREEN,
} from "../constants/actionTypes";
import { AppAction, InitialProps } from "../interface";

//All reducers functionalities
export const ContextReducers = (state: InitialProps, action: AppAction) => {
  if (action.type === LOADING) return { ...state, loading: action.payload };
  if (action.type === SETSCREEN)
    return { ...state, screenSize: action.payload };
  if (action.type === OPENSIDEBAR)
    return { ...state, isSidebarOpen: action.payload };
  if (action.type === SAVEDATA) return { ...state, result: action.payload };
  return { ...state };
};
