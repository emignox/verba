import ProfileImage from "./imgProfile";

function userData() {
  const imageUrl = "https://url-to-your-image.jpg";
  const altText = "Profile Image";
  const userName = "User Name";
  const className = "w-14 h-14 rounded-full my-4"; // Aggiungi qui le tue classi Tailwind

  return (
    <div className="bg-white h-screen w-72 flex flex-col mx-auto items-start">
      <ProfileImage
        imageUrl={imageUrl}
        altText={altText}
        userName={userName}
        className={className}
      />
    </div>
  );
}

export default userData;
