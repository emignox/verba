const mongoose = require('mongoose');

module.exports = async function () {
    try {
        await mongoose.connect('mongodb+srv://verba:beCode1234@verba.jtevtpc.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connexion à MongoDB réussie.');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
    }
};