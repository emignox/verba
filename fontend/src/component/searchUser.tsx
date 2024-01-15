{/*Si InterfaceSearchUser n'est pas accesible, changer la majuscule de Interface ! Merci VScode */}
import SearchUserProps from './interface/InterfaceSearchUser';
import ButtonAdd from './buttonAdd';

function searchUser({ Image, Name}: SearchUserProps) {

  return (
    <>
    <div className="flex justify-center my-3">
      <div className="flex flex-row items-center justify-between lg:w-1/2 rounded-lg" style={{ backgroundColor: "#E0E2E8" }}>
        <div className="flex p-2">
          <img className="w-12 rounded-full" src={Image} alt={Name} />
          <div className="flex-grow flex items-center">
            <h2 className="font-extrabold px-2">{Name}</h2>
          </div>
        </div>
        <div className="mx-5">
          <ButtonAdd />
        </div>
      </div>
    </div>
    </>
  );
}

export default searchUser;
