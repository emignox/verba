import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";

function MobileNav() {
  return (
    <div
      className="flex justify-around h-16 "
      style={{ backgroundColor: "#1C1C1F" }}
    >
      <button className="  w-14 rounded-md ">
        <FontAwesomeIcon className="text-white text-2xl" icon={faHome} />
      </button>
      <button className=" w-14 rounded-md ">
        <FontAwesomeIcon className="text-white  text-2xl" icon={faPlus} />
      </button>
      <button className="  w-14  flex rounded-md justify-center items-center ">
        <img
          src="https://img.freepik.com/free-photo/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise_181624-6998.jpg?w=1800&t=st=1704895897~exp=1704896497~hmac=96cfeaf9f699ac2bbceda1e3de6e5f3894c9706e50c503f733e6138d797d5b6b"
          alt="Small"
          className="w-7 h-7 rounded-full"
        />
      </button>
    </div>
  );
}

export default MobileNav;
