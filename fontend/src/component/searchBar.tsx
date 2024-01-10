import Loop from "../img/loop.png";

function bar() {
  return (
    <div className=" flex">
      <img className=" lg:w-7 lg:h-7 lg:mt-1" src={Loop} alt="" />
      <input
        className=" lg:h-7 lg:mt-1 lg:mx-5  lg:rounded-lg "
        type="text"
        placeholder=" Search..."
      />{" "}
    </div>
  );
}
export default bar;
