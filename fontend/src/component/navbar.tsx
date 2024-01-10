import Logo1 from "./logo";
import { useState } from "react";
import Search from "./searchBar";
import Toggle from "./toggle";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <div>
      <div
        className="lg:flex lg:flex-row lg:w-full lg:h-16 lg:justify-between lg:items-center  hidden"
        style={{}}
      >
        <button
          onClick={toggleMenu}
          className="text-white lg:text-3xl lg:mb-2 lg:mx-5 w-10"
        >
          {isOpen ? "x" : "☰"}
        </button>
        <div className="">
          <Logo1 />
        </div>
        <Search />
      </div>
      <div
        className={`transform transition-transform duration-1000 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <section className=" hidden  lg:block ">
          {" "}
          <Toggle />
        </section>
      </div>
    </div>
  );
}
export default Nav;
