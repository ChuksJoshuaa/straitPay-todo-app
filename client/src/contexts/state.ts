import { IProps, InitialProps, ResultProps } from "../interface";

export const initialState: InitialProps = {
  loading: true,
  screenSize: null,
  isSidebarOpen: false,
  result: {} as IProps,
  newData: {} as ResultProps,
};
