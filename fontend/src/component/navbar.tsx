import Logo1 from "./logo";
import { useState } from "react";
import Search from "./searchBar";
import Toggle from "./toggle";
import Menu from "./mobileNav";



function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(() => !isOpen);
  };
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", overflowY: "auto" }}>
      <div
        className="lg:flex lg:flex-row lg:w-full lg:h-16 lg:justify-between lg:items-center mt-2 mx-1 flex justify-between"
        style={{ backgroundColor: "#1C1C1F", position: "fixed", marginTop:0, width: "100%", zIndex: 1000 }}
      >
        <button
          onClick={toggleMenu}
          className="text-white lg:text-3xl lg:mb-2 lg:mx-5 w-10 hidden lg:hidden xl:block"
        >
          {isOpen ? "x" : "☰"}
        </button>
        <div className="xl:block">
          <Logo1 />
        </div>
        <Search />
      </div>


      <div
        className={`transform transition-transform duration-1000 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <section className="fixed hidden  lg:block">
          <Toggle />
        </section>
      </div>
      <div className="xl:hidden lg:block block fixed bottom-0 w-full  mb-0 my-0">
        <Menu />
      </div>
    </div>
  );
}
export default Nav;