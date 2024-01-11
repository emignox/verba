import React from 'react';

export const DeleteButton: React.FC = () => (
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete Account
    </button>
);

export const SaveButton: React.FC = () => (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        SAVE
    </button>
);