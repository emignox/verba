const mongoose = require('mongoose');

module.exports = async function () {
    try {
        await mongoose.connect('<connectDB>', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connexion à MongoDB réussie.');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
    }
};
