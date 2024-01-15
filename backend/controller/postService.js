const BASE_URL = 'http://localhost:3001/api';

const postService = {
  // ...

  addLike: async (userId, postId) => {
    const response = await fetch(`${BASE_URL}/addLike/${userId}/${postId}`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`Erreur lors de l'ajout du like : ${response.statusText}`);
    }
    return response.json();
  },

  addComment: async (userId, postId, texte) => {
    const response = await fetch(`${BASE_URL}/addComment/${userId}/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ texte }),
    });

    if (!response.ok) {
      throw new Error(`Erreur lors de l'ajout du commentaire : ${response.statusText}`);
    }
    return response.json();
  },

  // ...
};

export default postService;
