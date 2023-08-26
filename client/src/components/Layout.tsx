import { useContext } from "react";
import { ChildrenProps } from "../interface";
import MyContext from "../contexts";

const Layout = ({ children }: ChildrenProps) => {
  const { state } = useContext(MyContext);
  return (
    <div className="main-container">
      <div
        className={`layout mt-5 pt-5 ${!state.isSidebarOpen ? "mx-6" : "mx-1"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
