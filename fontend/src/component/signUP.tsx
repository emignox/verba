import Sign from "../img/signUp.png";
import FormSign from "./formSign";
import Login from "./login";

function signUp() {
  return (
    <>
      <div className=" xl:flex xl:flex-row    lg:flex lg:flex-col   ">
        <div className=" xl:hidden">
          {" "}
          <Login />
        </div>

        <div
          className="  xl:w-2/5 xl:mx-20 xl:h-screen "
          style={{ backgroundColor: "#394054" }}
        >
          <img
            className="  mx-auto w-96 lg:w-1/2 lg:mx-auto "
            src={Sign}
            alt=""
          />
          <div>
            <FormSign />
            <div className=" flex justify-center">
              <button className=" transition-colors duration-500 ease-in-out  hover:bg-slate-900 rounded-md">
                <img
                  className=" w-20  mx-auto   lg:w-20  lg:mx-auto "
                  src={Sign}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" xl:block lg:hidden hidden xl:w-1/2">
          {" "}
          <Login />
        </div>
      </div>
    </>
  );
}
export default signUp;
