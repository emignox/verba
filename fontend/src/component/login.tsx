import log from "../img/login.png";
import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center   h-screen  md:flex md:flex-col ">
        <img className="w-72 h-52 mb-10" src={log} alt="" />
        <form className="flex flex-col items-center">
          <label className="lg:mt-10 text-white my-5">
            Name:
            <br />
            <input
              className="lg:w-72 bg-transparent border-b-2 border-white rounded-sm focus:outline-none"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="lg:mt-10 text-white my-5">
            Password:
            <br />
            <input
              className="lg:w-72 bg-transparent border-b-2 border-white rounded-sm focus:outline-none"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <button className="mt-28 transition-colors duration-500 ease-in-out hover:bg-white rounded-md">
            <img
              className="w-28 mx-auto lg:w-20  lg:mx-auto"
              src={log}
              alt=""
            />
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
