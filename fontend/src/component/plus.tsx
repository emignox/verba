import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function plus() {
  return (
    <>
      <Link to="/add">
        <div>
          <FontAwesomeIcon className="text-white  text-2xl" icon={faPlus} />
        </div>
      </Link>
    </>
  );
}
export default plus;
