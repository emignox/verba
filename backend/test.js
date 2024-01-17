const mongoose = require('mongoose');
const User = require('./models/user');
const dbConnexion = require('./routes/dbConnexion');

async function run() {
    try {
        // Connexion DB
        await dbConnexion();

        // Création user
        const testUser = new User({
          name: 'Indiana Jones',
          email: 'indy@test.com',
          country: 'États-Unis',
          year: 1899,
          password: 'testpassword',
          picture: 'indiana.jpg',
          biography: 'Archéologue, professeur et aventurier américain né en 1899, je suis Indiana Jones. Connue pour mes exploits dans la recherche d\'artefacts historiques, ma vie est une série d\'aventures audacieuses. De la chasse au Saint Graal à la découverte de l\'Arche d\'Alliance, je m\'efforce de préserver l\'histoire tout en affrontant les forces obscures du monde.',
      });
    
        // Sauvegarde de l'utilisateur dans la DB
        await testUser.save();
        console.log('Utilisateur de test sauvegardé avec succès.');

        // Recherche de l'utilisateur dans la DB
        const user = await User.findById('1');
        console.log('Utilisateur trouvé :', user);

        // Fermeture de la connexion DB
        await mongoose.connection.close();
        console.log('Connexion à la base de données fermée.');
    } catch (err) {
        console.error(err);
    }
}

run();
