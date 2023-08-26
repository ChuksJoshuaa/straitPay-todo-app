import {
  LOADING,
  OPENSIDEBAR,
  SAVEDATA,
  SETSCREEN,
} from "./constants/actionTypes";

type ResultProps = {
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
}

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AppAction =
  | { type: typeof LOADING; payload: boolean }
  | { type: typeof OPENSIDEBAR; payload: boolean }
  | { type: typeof SETSCREEN; payload: number }
  | { type: typeof SAVEDATA; payload: IProps };
