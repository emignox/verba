const mongoose = require('mongoose');

module.exports = async function () {
    try {
        await mongoose.connect('mongodb+srv://verba:verba@verba.jtevtpc.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connexion à MongoDB réussie.');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
    }
};




// const mongoose = require('mongoose');

// module.exports = async function () {
//     try {
//         await mongoose.connect('mongodb+srv://verba:verba@verba.jtevtpc.mongodb.net/test?retryWrites=true&w=majority', {
//         });
//         console.log('Connexion à MongoDB réussie.');
//     } catch (error) {
//         console.error('Erreur de connexion à MongoDB :', error);
//     }
// };
