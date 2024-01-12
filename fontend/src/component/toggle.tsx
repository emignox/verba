import ProfileImage from "./imgProfile";
import Plus from "./plus";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function toggle() {
  const imageUrl = "";
  const altText = "Profile Image";
  const userName = "User Name";
  return (
    <div
      className="xl:flex xl:flex-col lg:w-1/5 lg:items-center   "
      style={{ backgroundColor: "transparent", height: "calc(100vh - 4rem)" }}
    >
      <div className=" ">
        <ProfileImage
          imageUrl={imageUrl}
          altText={altText}
          userName={userName}
        />
        <div className=" lg:my-32 xl:flex xl:justify-center xl:mx-auto">
          <Plus />
        </div>
        <div className=" xl:mt-56">
          <Link to="">
            <h1 className=" lg:text-lg xl:my-8 text-white">
              {" "}
              <FontAwesomeIcon
                icon={faCog}
                className="lg:text-lg xl:mx-2 text-white"
              />
              Setting
            </h1>
          </Link>
          <Link to="">
            <h1 className=" xl:text-lg  text-white">
              {" "}
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="xl:text-lg lg:mx-2 text-white"
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
