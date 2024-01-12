import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Pop from "./popUP.tsx";

function Plus() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <button onClick={handleClick}>
        <FontAwesomeIcon className="text-white  text-xl" icon={faPlus} />
      </button>
      {isPopupOpen && <Pop setIsPopupOpen={setIsPopupOpen} />}
    </>
  );
}

export default Plus;
