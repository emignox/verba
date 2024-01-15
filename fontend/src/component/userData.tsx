import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import Add from "./buttonAdd.tsx";
import { useState } from "react";

function UserData() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <>
      <img
        className="rounded-full  w-16 mx-5 my-5 sm:w-20 md:w-24  xl:hidden g:hidden  "
        src="https://img.freepik.com/free-photo/gondolas-lagoon-venice-sunrise-italy_268835-1290.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph"
        alt=""
      />
      <div className="flex justify-center items-start h-screen w-full mx-0 xl:flex-col xl:items-center">
        <div className="bg-transparent h-auto w-full flex flex-row  xl:flex-col xl:items-center">
          <img
            className="rounded-full  w-16 mx-5 my-5 sm:w-20 md:w-24  sm:hidden md:hidden  hidden xl:block   "
            src="https://img.freepik.com/free-photo/gondolas-lagoon-venice-sunrise-italy_268835-1290.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph"
            alt=""
          />
          <div className=" mt-2 mb-0 xl:mt-5 xl:mb-5">
            <div className="flex flex-row justify-between  items-center w-full xl:flex-col xl:items-center">
              {" "}
              <h1 className=" font-bold text-white  "> Polizzotto emanuele</h1>
              <Add />
            </div>
            <div className="">
              <p
                className={`text-white w-72  ${
                  isExpanded
                    ? ""
                    : "overflow-ellipsis overflow-hidden whitespace-nowrap"
                }`}
              >
                <strong>bio:</strong> text sono giovanni di napoli e mangio la
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                perspiciatis aspernatur dolores veniam voluptas, temporibus
                saepe est assumenda modi, quos excepturi, dignissimos doloremque
                facilis sint expedita aliquam. Nesciunt, consectetur sed. pizza{" "}
              </p>
              <button
                className="text-blue-500 text-xs"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </div>
            <div className=" sm:flex md:flex flex  xl:block">
              <div className="flex flex-row  justify-between  text-white xl:flex-col xl:items-center xl:bg-white xl:text-black xl:my-7 xl:rounded-xl ">
                <span className="lg:hidden md:hidden  sm:hidden xl:block xl:text-2xl hidden ">
                  activity:
                </span>
                <p className=" text-xs   xl:text-lg ">{" 20 Post"}</p>
              </div>
              <div className="flex flex-row  justify-between mx-5 text-white xl:flex-col xl:items-center xl:bg-white xl:text-black xl:rounded-xl ">
                <span className="lg:hidden md:hidden  sm:hidden xl:block xl:text-2xl hidden ">
                  with us since:
                </span>
                <p className=" text-xs  xl:text-lg   xl:mr-0">
                  <FontAwesomeIcon icon={faStopwatch} />
                  {" time"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserData;
