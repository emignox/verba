import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function buttonAdd() {
  return (
    <div>
      {" "}
      <button
        className="h-9 w-9 text-white text-center rounded-sm transition-transform transform hover:scale-125"
        style={{ backgroundColor: "#5DA5B3" }}
      >
        {" "}
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
export default buttonAdd;
