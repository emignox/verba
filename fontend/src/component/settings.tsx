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
                <div className="flex flex-col items-center mb-5">
                    <h1 className="py-5 text-white font-bold text-2xl">SETTINGS</h1>
                    <SaveButton />
                </div>
                <div className="flex flex-row my-5 py-5">
                    <div className="flex flex-col items-center mx-5 justify-between">
                        <h2 className="text-white font-bold">PICTURE</h2>
                        <div
                            className="w-56 h-56 rounded-full border-2 border-white"
                            style={{
                                backgroundImage: `url(${profileImageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <label htmlFor="fileInput" className="border-2 rounded-lg bg-transparent cursor-pointer text-white">
                            Upload
                            <input
                            type="file"
                            id="fileInput"
                            onChange={handleImageChange}
                            className="hidden"
                            />
                        </label>
                    </div>

                    <div className="flex flex-col items-center mx-4">
                        <div className="flex flex-col h-1/3">
                            <h3 className="text-white font-bold">Name</h3>
                            <input type="text" value={name} onChange={(handleNameChange)} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" defaultValue="test"/>
                        </div>
                        <div className="flex flex-col w-full h-2/3">
                            <h3 className="text-white font-bold">Bio</h3>
                            <textarea value={bio} onChange={(handleBioChange)} className="h-full border-2 p-2 focus:outline-none bg-transparent text-white rounded-lg" placeholder="Bio" />
                        </div>   
                    </div>
                    <div className="flex flex-col items-center mx-4">
                        <div className="flex flex-col h-1/3">
                            <h3 className="text-white font-bold">Email</h3>
                            <input type="email" value={email} onChange={handleEmailChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Email" />
                        </div>
                        <div className="flex flex-col h-1/3">
                            <h3 className="text-white font-bold">Password</h3>
                            <input type="password" value={password} onChange={handlePasswordChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Mot de passe" />
                        </div> 
                        <div className="flex flex-col h-1/3">
                            <h3 className="text-white font-bold">Repeat Password</h3>
                            <input type="password" value={repeatPassword} onChange={handleRepeatPasswordChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Réinitialiser le mot de passe" />
                        </div> 
                    </div>
                    <div className="flex flex-col items-center mx-4">
                        <div className="flex flex-col h-1/3">
                            <h3 className="text-white font-bold">Country</h3>
                            <input type="text" value={country} onChange={handleCountryChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Pays" />
                        </div>
                        <div className="flex flex-col h-1/3">
                            <h3 className="text-white font-bold">Âge</h3>
                            <input type="number" value={age} onChange={handleAgeChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Âge" />
                        </div>
                        <div className="flex h-1/3 items-center">
                            <DeleteButton />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
    );
};

export default Settings;
