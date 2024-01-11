import React, { useState } from 'react';
import { DeleteButton, SaveButton } from './buttons';

const Settings: React.FC = () => {
    const defaultImageUrl = "chemin/vers/votre/image/par/defaut.jpg";
    const [profileImageUrl, setProfileImageUrl] = useState<string>(defaultImageUrl);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfileImageUrl(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <form className="flex flex-col space-y-4">
            <div className="mb-4">
                <img src={profileImageUrl} alt="Profile" className="w-20 h-20 object-cover rounded-full" />
                <input type="file" onChange={handleImageChange} className="border p-2" />
            </div>
            
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" placeholder="Email" />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2" placeholder="Nom" />
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="border p-2" placeholder="Bio" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" placeholder="Mot de passe" />
            <input type="password" className="border p-2" placeholder="Réinitialiser le mot de passe" />
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="border p-2" placeholder="Pays" />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="border p-2" placeholder="Âge" />
            <div className="flex justify-end space-x-4">
                <DeleteButton />
                <SaveButton />
            </div>
        </form>
    );
};

export default Settings;
