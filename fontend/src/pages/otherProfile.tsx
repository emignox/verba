import UserData from "../component/userData";
import Nav from "../component/navbar";
function otherProfile() {
  return (
    <>
      <Nav />

      <div className="flex items-center justify-center  ">
        <div className="mt-4 flex items-center justify-center mx-auto  lg:absolute lg:top-20  xl:absolute xl:right-0 xl:top-32 xl:h-auto xl:mx-9">
          <UserData />
        </div>
      </div>
    </>
  );
}
export default otherProfile;
