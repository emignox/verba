import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pres from "../img/verba.png";
import "animate.css";
import "./presentation.css";

function Presentation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signup");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="fade-out">
        <img className=" logo mx-auto block " src={pres} alt="" />{" "}
        <img className="logo reflection " src={pres} alt="" />
      </div>
    </>
  );
}

export default Presentation;
