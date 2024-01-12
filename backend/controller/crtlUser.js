// Supposons que tu as un service utilisateur avec une méthode updateUserStatus
const userService = require('./updateUserStatus');


// Mise à jour du statut de l'utilisateur (désactivation)
const updateStatus = async (req, res) => {
  try {
    const { userId } = req.params;

    // Supposons que tu aies une méthode updateUserStatus dans le service utilisateur
    await userService.updateUserStatus(userId, false);

    res.json({ message: 'Statut de l\'utilisateur mis à jour avec succès.' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


