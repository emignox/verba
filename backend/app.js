const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserController = require('./controller/UserController');
const connectDb = require('./routes/dbConnexion');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware pour analyser le corps des requêtes en JSON
app.use(bodyParser.json());

//connexion MongoDb :
connectDb();
// Gestion des routes
app.post('/api/register', UserController.registerUser);
app.post('/api/sendFriendRequest/:userId/:friendId', UserController.sendFriendRequest);
app.post('/api/acceptFriendRequest/:userId/:friendId', UserController.acceptFriendRequest);
app.get('/api/getFriends/:userId', UserController.getFriends);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
