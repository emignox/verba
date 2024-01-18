import Logo1 from "./logo";
import { useState } from "react";
import Search from "./searchBar";
import Toggle from "./toggle";
import Menu from "./mobileNav";
import FriendsList from "./friendsList";
import Post from "./post";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(() => !isOpen);
  };
  const friendsData = [
    { id: 1, name: 'Nicolas', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
    { id: 2, name: 'Ema', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
    { id: 3, name: 'Cédric', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
    { id: 4, name: 'Tim', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
    { id: 5, name: 'Louise', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
  ];
  const postData = {
    profileImage: "https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg",
    profileName: "Nom du profil",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
  };
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", overflowY: "auto" }}>
      <div
        className="lg:flex lg:flex-row lg:w-full lg:h-16 lg:justify-between lg:items-center mt-2 mx-1 flex justify-between"
        style={{ backgroundColor: "#1C1C1F", position: "fixed", marginTop:0, width: "100%", zIndex: 1000 }}
      >
        <button
          onClick={toggleMenu}
          className="text-white lg:text-3xl lg:mb-2 lg:mx-5 w-10 hidden lg:hidden xl:block"
        >
          {isOpen ? "x" : "☰"}
        </button>
        <div className="xl:block">
          <Logo1 />
        </div>
        <Search />
      </div>

      <div className="absolute flex flex-col items-center top-20 overflow-y-auto" style={{ maxHeight: "calc(100vh - 20px)" }}>
        <Post {...postData} />
        <Post {...postData} />
        <Post {...postData} />
      </div>
      <div className="lg:absolute lg:right-0 lg:top-20 lg:block hidden">
        <FriendsList friends={friendsData} />
      </div>
      <div
        className={`transform transition-transform duration-1000 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <section className="fixed hidden  lg:block">
          <Toggle />
        </section>
      </div>
      <div className="xl:hidden lg:block block fixed bottom-0 w-full  mb-0 my-0">
        <Menu />
      </div>
    </div>
  );
}
export default Nav;