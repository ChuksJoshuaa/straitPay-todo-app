import { createContext, useEffect, useReducer } from "react";
import { AppAction, ChildrenProps, IProps, InitialProps } from "../interface";
import { initialState } from "./state";
import {
  LOADING,
  OPENSIDEBAR,
  SAVEDATA,
  SETSCREEN,
} from "../constants/actionTypes";
import { ContextReducers } from "../reducers";
import { serverUrl } from "../routes";

// Create the context
const MyContext = createContext<{
  state: InitialProps;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialState, dispatch: () => null });

export const ContextProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(ContextReducers, initialState);

  const checkWidth = () => {
    let windowWidth = null;
    if (typeof window !== "undefined") {
      windowWidth = window?.innerWidth;
      dispatch({ type: SETSCREEN, payload: windowWidth });
    }

    if (windowWidth) {
      if (windowWidth <= 850) dispatch({ type: OPENSIDEBAR, payload: true });
      if (windowWidth >= 850) dispatch({ type: OPENSIDEBAR, payload: false });
      return windowWidth;
    }
  };

  const getFetchData = async (): Promise<void> => {
    dispatch({ type: LOADING, payload: true });
    try {
      let url = `${serverUrl}/api/v1/tasks`;
      const response = await fetch(url);
      const resp = await response.json();
      let data = resp.data.data;
      if (resp && data.length > 0)
        return dispatch({ type: SAVEDATA, payload: resp });
      else dispatch({ type: SAVEDATA, payload: {} as IProps });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: LOADING, payload: false });
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [state.screenSize]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
