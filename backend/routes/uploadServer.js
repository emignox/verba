// Nom du fichier : uploadServer.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuration de Multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Endpoint pour le téléchargement de l'image
app.post('/upload', upload.single('profilePicture'), (req, res) => {
  const imagePath = '/uploads/' + req.file.filename;
  // Enregistrez l'image dans la base de données avec le chemin `imagePath`
  // ...

  res.json({ imagePath });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
