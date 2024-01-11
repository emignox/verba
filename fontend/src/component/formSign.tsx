import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    age: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=" ">
      <form className=" flex flex-col  justify-centers items-center">
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
            className="lg:w-72 bg-transparent  border-b-2 border-white   rounded-sm  focus:outline-none"
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
      </form>
    </div>
  );
}

export default Form;
