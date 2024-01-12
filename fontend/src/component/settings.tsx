import React, { useState } from 'react';
import { DeleteButton, SaveButton } from './buttons';
import image from "../img/profil.jpg";

const Settings: React.FC = () => {
    const [profileImageUrl, setProfileImageUrl] = useState<string>(image);
    const [email, setEmail] = useState('test@email.com');
    const [name, setName] = useState('Nom');
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
        <div className="flex flex-col w-screen h-screen lg:flex lg:justify-center lg:items-stretch">
            <form className="flex flex-col items-center lg:flex lg:flex-col lg:justify-evenly lg:items-center">
                <div className="flex flex-row justify-between items-center lg:flex lg:flex-col lg:items-center lg:justify-between">
                    <h1 className="text-white font-bold lg:text-3xl">SETTINGS</h1>
                    <div className="my-5 lg:my-5">
                        <SaveButton />
                    </div>
                </div>
                <div className="lg:flex lg:flex-row lg:w-screen lg:justify-evenly">
                    <div className="flex flex-col lg:flex lg:flex-col lg:items-center lg:justify-between">
                        <h2 className="text-white font-bold my-2">PICTURE</h2>
                        <div className="flex flex-row items-center justify-around lg:flex lg:flex-col">
                            <div className="w-24 h-24 lg:m-5 lg:w-56 lg:h-56 rounded-full border-2 border-white"
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

                    </div>

                    <div className="flex flex-col items-center lg:flex lg:flex-col lg:items-center">
                        <div className="py-3 lg:flex lg:flex-col lg:h-1/3">
                            <h3 className="text-white font-bold">Name</h3>
                            <input type="text" value={name} onChange={(handleNameChange)} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" defaultValue="test"/>
                        </div>
                        <div className="py-3 lg:flex lg:flex-col lg:w-full lg:h-2/3">
                            <h3 className="text-white font-bold">Bio</h3>
                            <textarea value={bio} onChange={(handleBioChange)} className="lg:h-full border-2 p-2 focus:outline-none bg-transparent text-white rounded-lg" placeholder="Bio" />
                        </div>   
                    </div>
                    <div className="lg:flex lg:flex-col lg:items-center">
                        <div className="py-3 lg:flex lg:flex-col lg:h-1/3">
                            <h3 className="text-white font-bold">Email</h3>
                            <input type="email" value={email} onChange={handleEmailChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Email" />
                        </div>
                        <div className="py-3 lg:flex lg:flex-col lg:h-1/3">
                            <h3 className="text-white font-bold">Password</h3>
                            <input type="password" value={password} onChange={handlePasswordChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Mot de passe" />
                        </div> 
                        <div className="py-3 lg:flex lg:flex-col lg:h-1/3">
                            <h3 className="text-white font-bold">Repeat Password</h3>
                            <input type="password" value={repeatPassword} onChange={handleRepeatPasswordChange} className="border-b-2 p-2 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Réinitialiser le mot de passe" />
                        </div> 
                    </div>
                    <div className="lg:flex lg:flex-col lg:items-center">
                        <div className="py-3 lg:flex lg:flex-col lg:h-1/3">
                            <h3 className="text-white font-bold">Country</h3>
                            <input type="text" value={country} onChange={handleCountryChange} className="border-b-2 p-2 lg:w-2/3 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Pays" />
                        </div>
                        <div className="py-3 lg:flex lg:flex-col lg:h-1/3">
                            <h3 className="text-white font-bold">Âge</h3>
                            <input type="number" value={age} onChange={handleAgeChange} className="border-b-2 p-2 lg:w-1/3 focus:outline-none bg-transparent text-white rounded-sm" placeholder="Âge" />
                        </div>
                        <div className="flex justify-center py-3 lg:flex lg:h-1/3 lg:items-center">
                            <DeleteButton />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Settings;
