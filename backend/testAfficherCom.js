const mongoose = require('mongoose');
const Post = require('./models/post');
const dbConnection = require('./routes/dbConnexion');

async function run() {
    try {
        // Connexion DB
        await dbConnection();

        // ID du post spécifique
        const postId = '65a14cb03bb07ae9a1c75349';

        // Recherche du post dans la DB
        const post = await Post.findById(postId);

        if (!post) {
            console.log('Post non trouvé.');
            return;
        }

        // Affichage du post
        console.log('Post :');
        console.log(`ID: ${post._id}`);
        console.log(`Auteur: ${post.auteur}`);
        console.log(`Contenu: ${post.contenu}`);
        console.log('------------------------');

        // Affichage des commentaires
        console.log('Commentaires du post :');
        post.commentaires.forEach((commentaire, index) => {
            console.log(`Commentaire ${index + 1}:`);
            console.log(`Auteur: ${commentaire.auteur}`);
            console.log(`Texte: ${commentaire.texte}`);
            console.log('------------------------');
        });

        // Affichage des likes
        console.log('Likes du post :');
        post.likes.forEach((like, index) => {
            console.log(`Like ${index + 1}: ${like}`);
        });

        // Fermeture de la connexion DB
        await mongoose.connection.close();
        console.log('Connexion à la base de données fermée.');
    } catch (err) {
        console.error(err);
    }
}

run();
