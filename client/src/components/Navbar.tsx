import { useContext, useState } from "react";
import { NavProfile } from ".";
import searchSvg from "../assets/search.svg";
import toggleSvg from "../assets/toggle.svg";
import MyContext from "../contexts";
import { OPENSIDEBAR } from "../constants/actionTypes";

const Navbar = () => {
  const { state, dispatch } = useContext(MyContext);
  const [value, setValue] = useState("");

  const handleChange = () => {
    console.log(value);
  };

  const openSidebar = () => dispatch({ type: OPENSIDEBAR, payload: true });

  return (
    <div className="w-full h-[55px] relative bg-[#222]">
      <div
        className={`main-container flex flex-row ${
          !state.isSidebarOpen ? "justify-start" : "justify-between"
        } items-center`}
      >
        <div className="w-72 h-[55px]" style={{ fontFamily: "Lobster Two" }}>
          <h1
            className={`text-gray-50 text-4xl font-bold pt-2 ${
              !state.isSidebarOpen ? "ml-5" : "ml-0"
            }`}
          >
            straitPay.
          </h1>
        </div>
        <div
          className={`ml-20 md:ml-30 flex justify-between items-center w-full ${
            !state.isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <div className="relative">
            <input
              onKeyUp={handleChange}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search task..."
              className="w-[250px] md:w-[500px] h-[27px] rounded-[4px] bg-white outline-none px-3"
            />
            <div className="absolute top-[50%] right-[10px] translate-y-[-50%]">
              <img
                src={searchSvg}
                alt="search"
                className=" h-4 w-4 text-[#222]"
              />
            </div>
          </div>
          <div>
            <NavProfile />
          </div>
        </div>

        <div
          className={`cursor-pointer ${
            !state.isSidebarOpen ? "hidden" : "block"
          }`}
          onClick={openSidebar}
        >
          <img src={toggleSvg} alt="search" className=" h-8 w-8 text-[#222]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
