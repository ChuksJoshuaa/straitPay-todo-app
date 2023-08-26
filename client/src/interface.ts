import { LOADING, OPENSIDEBAR, SETSCREEN } from "./constants/actionTypes";

export interface InitialProps {
  loading: boolean;
  screenSize: number | null;
  isSidebarOpen: boolean;
}

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AppAction =
  | { type: typeof LOADING; payload: boolean }
  | { type: typeof OPENSIDEBAR; payload: boolean }
  | { type: typeof SETSCREEN; payload: number };
