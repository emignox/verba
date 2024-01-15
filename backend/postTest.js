const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const Post = require('./models/post');
const dbConnection = require('./routes/dbConnexion');

async function run() {
    try {
        // Connexion DB
        await dbConnection();

        // ID de l'utilisateur qui a ajouté le like et le commentaire
        const userId = '65a156070812d47aa503f452';

        // Création d'un nouveau post avec des commentaires
        const postEnregistre = await Post.create({
            contenu: 'Nouveau post avec commentaires',
            auteur: userId,
            likes: [userId],
            commentaires: [
                { auteur: userId, texte: 'Réfléchissant à l\'importance de l\'activisme numérique. Utilisons la technologie pour défendre les droits à l\'information et à la liberté d\'expression. 🌐✊ #DigitalActivism #InformationRights' },
                { auteur: userId, texte: 'Célébrant la mission de Creative Commons. L\'innovation et la collaboration prospèrent grâce à un partage équitable de la création intellectuelle. 🤝🎨 #CreativeCommons #CollaborativeInnovation' },
                { auteur: userId, texte: 'Travaillant sur des projets visant à rendre les données publiques plus accessibles. Des données ouvertes renforcent la démocratie et encouragent la transparence. 🔍🏛️ #OpenData #DemocracyStrength' },
                { auteur: userId, texte: 'Partageant des idées sur la neutralité du net. La préservation d\'un Internet ouvert est cruciale pour la libre circulation de l\'information. 🌐🤝 #NetNeutrality #OpenInternet' },
                { auteur: userId, texte: 'Engagé dans la défense de la confidentialité en ligne. Chacun a le droit à la vie privée dans le monde numérique. 🔒🌐 #OnlinePrivacy #DigitalRights' },
            ],
        });

        if (postEnregistre) {
            console.log('Post créé avec succès :', postEnregistre);
        } else {
            console.log('Erreur lors de la création du post.');
        }

        // Fermeture de la connexion DB
        await mongoose.connection.close();
        console.log('Connexion à la base de données fermée.');
    } catch (err) {
        console.error(err);
    }
}

run();
