import Nav from "../component/navbar";
import SearchUser from "../component/searchUser";
import FriendsList from "../component/friendsList";

const friendsData = [
  { id: 1, name: 'Nicolas', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
  { id: 2, name: 'Ema', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
  { id: 3, name: 'Cédric', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
  { id: 4, name: 'Tim', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
  { id: 5, name: 'Louise', img: 'https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg' },
];
const searchData = {
    Image: "https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg",
    Name: "Example One",
}


function home() {
    return (
        <div>
            <div className="absolute">
                <Nav />
            </div>
            <div className="flex flex-col items-center top-20 overflow-y-auto" style={{ maxHeight: "calc(100vh - 20px)" }}>
                <SearchUser {...searchData} />
                <SearchUser {...searchData} />
                <SearchUser {...searchData} />
            </div>
            <div className="lg:absolute lg:right-0 lg:top-20 lg:block hidden">
                <FriendsList friends={friendsData} />
            </div>
        </div>
    
      );
}
export default home;
