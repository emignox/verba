import Loop from "../img/loop.png";
import { useState } from "react";
import "./seachBar.css";

function Bar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="flex justify-center lg:justify-start">
      <img
        onClick={toggleSearch}
        className="lg:w-7 lg:h-7 lg:mt-1 w-10 h-10 cursor-pointer"
        src={Loop}
        alt=""
      />
      <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 lg:hidden ${
          isSearchVisible ? "show" : "hide"
        }`}
      >
        <input
          className="h-7  mx-5 rounded-lg   mt-5 text-white"
          style={{ backgroundColor: "#494949" }}
          type="text"
          placeholder=" Search..."
        />
      </div>
    </div>
  );
}
export default Bar;
