import React, { useState } from 'react';
import { DeleteButton, SaveButton } from './buttons';
import image from "../img/profil.jpg";

const Settings: React.FC = () => {
    const [profileImageUrl, setProfileImageUrl] = useState<string>(image);
    const [email, setEmail] = useState('test@email.com');
    const [name, setName] = useState('Nom');;
    const [bio, setBio] = useState('Ceci est une BIO');
    const [password, setPassword] = useState('password');
    const [repeatPassword, setRepeatPassword] = useState('password');
    const [country, setCountry] = useState('Belgium');
    const [age, setAge] = useState('21');

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
    const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    };
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    };
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    }; 

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col items-center">
                <div className="flex flex-col items-center my-3">
                    <h1 className="py-3 text-white">SETTINGS</h1>
                    <SaveButton />
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col items-center mx-2">
                        <img src={profileImageUrl} alt="Profile" className="w-20 h-20 object-cover rounded-full" />
                        <input type="file" onChange={handleImageChange} className="border p-2" />
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <input type="text" value={name} onChange={(handleNameChange)} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" defaultValue="test"/>
                        <textarea value={bio} onChange={(handleBioChange)} className="border p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Bio" />
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <input type="email" value={email} onChange={handleEmailChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Email" />
                        <input type="password" value={password} onChange={handlePasswordChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Mot de passe" />
                        <input type="password" value={repeatPassword} onChange={handleRepeatPasswordChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Réinitialiser le mot de passe" />
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <input type="text" value={country} onChange={handleCountryChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Pays" />
                        <input type="number" value={age} onChange={handleAgeChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Âge" />
                        <DeleteButton />
                    </div>
                </div>
            </form>
        </div>
        
    );
};

export default Settings;
