// UserController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const UserController = {

  // Inscription d'un nouvel utilisateur
  registerUser: async (req, res) => {
    try {
      const { nom, email, age, motDePasse, confirmPassword } = req.body;

      // Vérifie si le mot de passe et la confirmation sont identiques
      if (motDePasse !== confirmPassword) {
        return res.status(400).json({ message: 'Les mots de passe ne correspondent pas.' });
      }

      // Vérifie si l'utilisateur existe déjà
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'Un utilisateur avec cet email existe déjà.' });
      }

      // Hashage du mot de passe avant de sauvegarder l'utilisateur
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(motDePasse, salt);

      // Crée un nouvel utilisateur
      const newUser = new User({ nom, email, age, motDePasse: hashedPassword });

      // Sauvegarde l'utilisateur dans la base de données
      await newUser.save();

      res.json({ message: 'Inscription réussie.' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Envoyer une demande d'amitié
  sendFriendRequest: async (req, res) => {
    try {
      const { userId, friendId } = req.params;

      // Vérifie si les utilisateurs existent
      const user = await User.findById(userId);
      const friend = await User.findById(friendId);

      if (!user || !friend) {
        return res.status(404).json({ message: 'Utilisateur non trouvé.' });
      }

      // Ajoute l'ami à la liste des demandes d'amis
      if (!user.amis.includes(friendId)) {
        user.amis.push(friendId);
        await user.save();
        return res.json({ message: 'Demande d\'amitié envoyée avec succès.' });
      } else {
        return res.status(400).json({ message: 'Demande d\'amitié déjà envoyée.' });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Accepter une demande d'amitié
  acceptFriendRequest: async (req, res) => {
    try {
      const { userId, friendId } = req.params;

      // Vérifie si les utilisateurs existent
      const user = await User.findById(userId);
      const friend = await User.findById(friendId);

      if (!user || !friend) {
        return res.status(404).json({ message: 'Utilisateur non trouvé.' });
      }

      // Vérifie si la demande d'amitié existe
      if (user.amis.includes(friendId)) {
        // Ajoute l'ami à la liste des amis et supprime la demande d'amitié
        user.amis.push(friendId);
        user.amis = user.amis.filter(id => id.toString() !== friendId);
        await user.save();

        // Fait de même pour l'ami
        friend.amis.push(userId);
        friend.amis = friend.amis.filter(id => id.toString() !== userId);
        await friend.save();

        return res.json({ message: 'Demande d\'amitié acceptée avec succès.' });
      } else {
        return res.status(400).json({ message: 'Demande d\'amitié non trouvée.' });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Liste des amis d'un utilisateur
  getFriends: async (req, res) => {
    try {
      const { userId } = req.params;

      // Vérifie si l'utilisateur existe
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé.' });
      }

      // Récupère la liste des amis de l'utilisateur
      const friends = await User.find({ _id: { $in: user.amis } });

      res.json(friends);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = UserController;
