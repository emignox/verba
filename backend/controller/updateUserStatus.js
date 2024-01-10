// Supposons que tu aies un fichier userService.js
const BASE_URL = 'http://localhost:3001/api';

const userService = {
  // ...

  updateUserStatus: async (userId, status) => {
    const response = await fetch(`${BASE_URL}/updateUserStatus/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      throw new Error(`Erreur lors de la mise à jour du statut de l'utilisateur : ${response.statusText}`);
    }

    return response.json();
  },
};

export default userService;
