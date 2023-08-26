import { IProps, InitialProps, ResultProps } from "../interface";

export const initialState: InitialProps = {
  loading: true,
  screenSize: null,
  isSidebarOpen: false,
  result: {} as IProps,
  searchData: [] as Array<ResultProps>,
  newData: {} as ResultProps,
  searchTerm: "",
  taskId: "",
};
