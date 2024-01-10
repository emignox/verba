import img from "../img/iconePlus.png";
import { Link } from "react-router-dom";
function plus() {
  return (
    <>
      <Link to="/add">
        <div>
          <img src={img} alt="iconePlus" className="lg:w-20 lg:h-20" />
        </div>
      </Link>
    </>
  );
}
export default plus;
