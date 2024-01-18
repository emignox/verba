import React, { useState } from "react";

type PopProps = {
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Pop: React.FC<PopProps> = ({ setIsPopupOpen }) => {
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSend = () => {
    // Qui invii i dati al database
    // Per esempio:
    // axios.post('/api/endpoint', { text })
    //   .then(() => setIsPopupOpen(false))
    //   .catch(error => console.error(error));

    setText("");
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="mx-auto bg-slate-200 p-5 rounded shadow-lg relative z-10 lg:w-2/6">
          <h2 className="text-center">New Post</h2>
          <textarea
            className="w-full h-20 p-3 mt-2  bg-slate-200"
            placeholder="Write here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <div className="flex justify-center mt-2">
            <button
              style={{ backgroundColor: "#5DA5B3" }}
              className="mx-6 rounded-md w-14"
              onClick={handleSend}
            >
              Send
            </button>
            <button
              style={{ backgroundColor: "#494949" }}
              className="mx-6 rounded-md w-14 text-white"
              onClick={() => setIsPopupOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pop;