import React from 'react';

export const DeleteButton: React.FC = () => (
    <button className="hover:bg-red-400 hover:text-white hover:scale-110 hover:border-none bg-transparent border-slate-500 border-2 rounded-lg py-2 px-4 text-slate-500">
        Delete Account
    </button>
);

export const SaveButton: React.FC = () => (
    <button className="bg-transparent hover:bg-cyan-300 hover:border-transparent hover:scale-110 border-2 border-white text-white font-bold py-2 px-4 rounded-lg">
        SAVE
    </button>
);