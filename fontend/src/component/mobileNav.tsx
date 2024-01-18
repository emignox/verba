import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttonsData } from "./mobileData.tsx";
import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Pop from "./popUP.tsx";

function MobileNav() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = (icon: IconDefinition) => {
    if (icon.iconName === "plus") {
      setIsPopupOpen(true);
    }
  };

  return (
    <div
      className="flex flex-row justify-between   "
      style={{ backgroundColor: "#1C1C1F" }}
    >
      {buttonsData.map((button, index) => (
        <button
          key={index}
          className={button.buttonClass}
          onClick={() => handleButtonClick(button.icon)}
        >
          <Link to={button.link || '/default-path'}>
            <FontAwesomeIcon className={button.iconClass} icon={button.icon} />
          </Link>
        </button>
      ))}

      <button className="w-14 flex rounded-md justify-center items-center">
        <img
          src="https://img.freepik.com/free-photo/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise_181624-6998.jpg?w=1800&t=st=1704895897~exp=1704896497~hmac=96cfeaf9f699ac2bbceda1e3de6e5f3894c9706e50c503f733e6138d797d5b6b"
          alt="Small"
          className="w-7 h-7 rounded-full"
        />
      </button>

      {isPopupOpen && <Pop setIsPopupOpen={setIsPopupOpen} />}
    </div>
  );
}

export default MobileNav;
