import React, { useState } from 'react';
import { DeleteButton, SaveButton } from './buttons';
import image from "../img/profil.jpg";

const Settings: React.FC = () => {
    const [profileImageUrl, setProfileImageUrl] = useState<string>(image);
    const [email, setEmail] = useState('test@email.com');
    const [name, setName] = useState('Nom');;
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfileImageUrl(URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col items-center">
                <div className="flex flex-row">
                    <h1>SETTINGS</h1>
                    <SaveButton />
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col items-center">
                        <img src={profileImageUrl} alt="Profile" className="w-20 h-20 object-cover rounded-full" />
                        <input type="file" onChange={handleImageChange} className="border p-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="text" value={name} onChange={(handleNameChange)} className="border p-2" defaultValue="test"/>
                        <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="border p-2" placeholder="Bio" />
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="email" value={email} onChange={handleEmailChange} className="border p-2" placeholder="Email" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" placeholder="Mot de passe" />
                        <input type="password" className="border p-2" placeholder="Réinitialiser le mot de passe" />
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="border p-2" placeholder="Pays" />
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="border p-2" placeholder="Âge" />
                        <DeleteButton />
                    </div>
                </div>
            </form>
        </div>
        
    );
};

export default Settings;
