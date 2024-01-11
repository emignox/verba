import Friend from './interface/InterfaceFriends';

interface FriendsListProps {
    friends: Friend[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friends }) => {
    return (
        <div className="flex flex-col w-1/5 rounded-xl p-3 my-3" style={{ backgroundColor: "#E0E2E8" }}>
            <h2 className="font-bold text-3xl text-center pb-4">FRIENDS</h2>
            <ul>
                {friends.map((friend) => (
                    <div className="w-full flex flex-col items-start my-1" key={friend.id}>
                        <div className="flex flex-row justify-between px-5 py-2">
                            <div className="flex flex-row items-center">
                                <img src={friend.img} alt={friend.name} className="w-10 h-10 rounded-full" />
                                <li className="w-full text-xl px-3">{friend.name}</li>
                            </div>
                            
                            {/*A UTILISER POUR LES DEMANDES D'AMIS*/}
                            <div className="flex flex-row">
                                <button className="bg-blue-400 text-white px-2 mx-2 rounded-md">V</button>
                                <button className="bg-slate-600 text-white px-2 mx-2 rounded-md">X</button>
                            </div>
                        </div>

                    </div>
                ))}
            </ul>
        </div>

    );
};

export default FriendsList;