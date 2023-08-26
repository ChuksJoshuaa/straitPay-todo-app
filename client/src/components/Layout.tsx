import { ChildrenProps } from "../interface";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="main-container">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
