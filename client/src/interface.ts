import {
  ADDDATA,
  LOADING,
  OPENSIDEBAR,
  SAVEDATA,
  SEARCHDATA,
  SEARCHTERM,
  SETID,
  SETSCREEN,
} from "./constants/actionTypes";

export type ResultProps = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type IProps = {
  data: Array<ResultProps>;
  count: number;
};

export interface InitialProps {
  loading: boolean;
  screenSize: number | null;
  isSidebarOpen: boolean;
  result: IProps;
  searchData: Array<ResultProps>;
  newData: ResultProps;
  searchTerm: string;
  taskId: string;
}

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AppAction =
  | { type: typeof LOADING; payload: boolean }
  | { type: typeof OPENSIDEBAR; payload: boolean }
  | { type: typeof SETSCREEN; payload: number }
  | { type: typeof SAVEDATA; payload: IProps }
  | { type: typeof ADDDATA; payload: ResultProps }
  | { type: typeof SEARCHTERM; payload: string }
  | { type: typeof SETID; payload: string }
  | { type: typeof SEARCHDATA; payload: Array<ResultProps> };

export interface FormProps {
  title: string;
  description: string;
}
