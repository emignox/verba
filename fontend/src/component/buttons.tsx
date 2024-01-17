// DeleteButton.tsx
import React, { useState } from 'react';

export const DeleteButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <>
      <button onClick={handleDeleteClick} className="border-2 border-red-500 text-red-500 px-5 py-2 hover:bg-gray-300 hover:text-black hover:border-transparent hover:scale-110 rounded">Delete</button>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col items-center bg-red-400 px-5 rounded">
            <h1 className="text-white p-5">DELETE ACCOUNT</h1>
            <p className="text-white">Do you want leave us ?</p>
            <div className="flex flex-row justify-around p-5">
              <button onClick={closePopup} className="bg-gray-300 text-black p-2 rounded-md m-3">No</button>
              <button onClick={closePopup} className="bg-gray-300 text-blacj p-2 rounded-md m-3">Yes</button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;

export const SaveButton: React.FC = () => (
    <button className="bg-transparent hover:bg-cyan-300 hover:border-transparent hover:scale-110 border-2 border-white text-white font-bold py-2 px-4 rounded-lg">
        SAVE
    </button>
);

export const LikeButton: React.FC = () => {
    const [likes, setLikes] = useState(43);
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLikeClick = () => {
      if (!isLiked) {
        // Ajouter un like
        setLikes((prevLikes) => prevLikes + 1);
      } else {
        // Annuler le like
        setLikes((prevLikes) => prevLikes - 1);
      }
  
      // Inverser l'état isLiked
      setIsLiked((prevIsLiked) => !prevIsLiked);
    };
  
    return (
      <button
        className={`${
          isLiked
            ? 'bg-cyan-400 text-white border-cyan-400'
            : 'bg-transparent text-cyan-400 border-cyan-400'
        } hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 border-2 font-bold py-2 px-4 rounded-lg`}
        onClick={handleLikeClick}
      >
        {isLiked ? 'Unlike' : 'Like'} ({likes})
      </button>
    );
  };