import { useState } from "react";
import Sign from "../img/signUp.png";
import userService from '../../../backend/controller/userService';

userService.registerUser(form)
  .then(data => {
    console.log(data);
    // Traitez la réponse du backend ici
  })
  .catch(error => {
    console.error(error);
    // Gérez les erreurs ici
  });

function Form() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    age: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //const response = await fetch("http://localhost:3001/api/register", {
        const response = await userService.registerUser(form);
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(form),
      // });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=" ">
      <form
        className=" flex flex-col  justify-centers items-center"
        onSubmit={handleSubmit}
      >
        <label className=" xl:my-5 text-white  my-5 ">
          Email:
          <br />
          <input
            className="lg:w-72 bg-transparent  border-b-2 border-white   rounded-sm  focus:outline-none"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label className="  xl:my-5 text-white my-5 ">
          Name:
          <br />
          <input
            className="lg:w-72 bg-transparent  border-b-2 border-white   rounded-sm  focus:outline-none focus:bg-transparent "
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <div className=" flex  lg:my-6 justify-between  my-5 ">
          <label className="  text-white">
            Age:
            <br />
            <input
              className="w-20 lg:w-32 lg:my-7 bg-transparent border-b-2 border-white rounded-sm focus:outline-none mx-3 appearance-none"
              type="text"
              name="age"
              value={form.age}
              onChange={handleChange}
            />
          </label>
          <label className="  lg:ml-8 text-white ">
            Country:
            <br />
            <input
              className="  w-20  lg:my-7 lg:w-32 bg-transparent  border-b-2 border-white   rounded-sm  focus:outline-none"
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className=" xl:mt-5  text-white my-5 ">
          Password:
          <br />
          <input
            className="lg:w-72 bg-transparent  border-b-2 border-white   rounded-sm  focus:outline-none"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <label className="  xl:mt-5 text-white   my-5">
          Confirm Password: <br />
          <input
            className="lg:w-72 bg-transparent  border-b-2 border-white   rounded-sm  focus:outline-none"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <div className=" flex justify-center">
          <button
            className=" transition-colors duration-500 ease-in-out  hover:bg-slate-900 rounded-md"
            type="submit"
          >
            <img
              className=" w-20  mx-auto   lg:w-20  lg:mx-auto "
              src={Sign}
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
