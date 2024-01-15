const BASE_URL = 'http://localhost:3001/api';

const userService = {
  registerUser: async (userData) => {
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de l'inscription : ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Erreur lors de l'inscription : ${error.message}`);
    }
  },
};

export default userService;
