import { BrowserRouter as Router } from "react-router-dom";
// import Sign from "./component/signUP";
// import Post from "./component/post";
// import FriendsList from "./component/friendsList";
import Settings from "./component/settings";
//import Other from "./pages/otherProfile";

// const friendsData = [
//   { id: 1, name: 'Nicolas', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
//   { id: 2, name: 'Ema', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
//   { id: 3, name: 'Cédric', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
//   { id: 4, name: 'Tim', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
//   { id: 5, name: 'Louise', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
// ];

const postData = {
  profileImage: "https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg",
  profileName: "Nom du profil",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
};

function App() {
  return (
    <div>
      <Router>

        <Settings/>
        {/*<Nav /> */}
        {/* 
          <div className=" flex justify-center items-center">
            {" "}
            <Other />
          </div>
        */}
        {/* <Sign /> */}
        {/*<Post {...postData} /> */}
        {/*<FriendsList friends={friendsData} /> */}
      </Router>
    </div>
  );
}

export default App;
