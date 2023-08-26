import { LOADING, OPENSIDEBAR, SETSCREEN } from "../constants/actionTypes";
import { AppAction, InitialProps } from "../interface";

//All reducers functionalities
export const ContextReducers = (state: InitialProps, action: AppAction) => {
  if (action.type === LOADING) return { ...state, loading: action.payload };
  if (action.type === SETSCREEN)
    return { ...state, screenSize: action.payload };
  if (action.type === OPENSIDEBAR)
    return { ...state, isSidebarOpen: action.payload };
  return { ...state };
};
