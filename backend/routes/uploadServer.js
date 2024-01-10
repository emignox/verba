const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/user');

const app = express();
const PORT = 3000;

// Configuration de Multer
const storage = multer.diskStorage({
  destination: '../src/upload/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Endpoint pour le téléchargement de l'image
app.post('/upload', upload.single('profilePicture'), async (req, res) => {
  try {
    const imagePath = '/uploads/' + req.file.filename;
    const userId = req.user.id; // Assure-toi que tu récupères correctement l'ID de l'utilisateur

    // Mets à jour le chemin de l'image pour l'utilisateur dans la base de données
    await User.findByIdAndUpdate(userId, { picture: imagePath });

    res.json({ imagePath });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

