import UserData from "../component/userData";
import Nav from "../component/navbar";
import Post from "../component/post";

const postData = {
  profileImage: "https://images.radio-canada.ca/q_auto,w_350/v1/ici-tele/1x1/carre-noir-racisme-systemique-brutalite-policiere.jpg",
  profileName: "Nom du profil",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
};
function otherProfile() {
  return (
    <>
      <Nav />
      <div className="absolute flex flex-col items-center top-20 overflow-y-auto" style={{ maxHeight: "calc(100vh - 20px)" }}>
        <Post {...postData} />
        <Post {...postData} />
        <Post {...postData} />
      </div>
      <div className="flex items-center justify-center  ">
        <div className="mt-4 flex items-center justify-center mx-auto  lg:absolute lg:top-20  xl:absolute xl:right-0 xl:top-32 xl:h-auto xl:mx-9">
          <UserData />
        </div>
      </div>
    </>
  );
}
export default otherProfile;
