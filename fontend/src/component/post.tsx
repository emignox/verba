import { useState } from 'react';
import PostProps from './interface/InterfacePost';

function Post({ profileImage, profileName, message }: PostProps) {
  const [likes, setLikes] = useState(0);

  function handleLikeClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <div className="flex flex-col w-1/2 rounded-lg p-3" style={{ backgroundColor: "#E0E2E8" }}>
        <div className="flex p-2">
            <img className="w-12 rounded-full" src={profileImage} alt={profileName} />
            <div className="flex-grow flex items-center">
                <h2 className="font-extrabold px-2">{profileName}</h2>
            </div>
        </div>
        <div className="px-4">
          <p>{message}</p>
        </div>
        <div className="px-4 py-3 font-bold flex justify-between">
          <button
            onClick={handleLikeClick}
          >
            {likes} Like
          </button>
          <p className="font-bold">TIME</p>
        </div>
      </div>
    </>
  );
}

export default Post;
