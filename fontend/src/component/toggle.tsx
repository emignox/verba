import ProfileImage from "./imgProfile";
import Plus from "./plus";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function toggle() {
  return (
    <div
      className="lg:flex lg:flex-col lg:w-1/5 lg:items-center "
      style={{ backgroundColor: "transparent", height: "calc(100vh - 4rem)" }}
    >
      <div className=" ">
        <ProfileImage />
        <div className=" lg:my-52">
          <Plus />
        </div>
        <div className="">
          <Link to="">
            <h1 className=" lg:text-2xl lg:my-8 text-white">
              {" "}
              <FontAwesomeIcon
                icon={faCog}
                className="lg:text-2xl lg:mx-2 text-white"
              />
              Setting
            </h1>
          </Link>
          <Link to="">
            <h1 className=" lg:text-2xl  text-white">
              {" "}
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="lg:text-2xl lg:mx-2 text-white"
              />
              LogOut
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default toggle;
