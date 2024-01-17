// PostController.js
const Post = require('../models/post');

const PostController = {
  // ...

  // Ajouter un like à un post
  addLike: async (req, res) => {
    try {
      const { userId, postId } = req.params;

      // Vérifie si le post existe
      const post = await Post.findById(postId);

      if (!post) {
        return res.status(404).json({ message: 'Post non trouvé.' });
      }

      // Ajoute le like s'il n'existe pas déjà
      if (!post.likes.includes(userId)) {
        post.likes.push(userId);
        await post.save();
        return res.json({ message: 'Like ajouté avec succès.' });
      } else {
        return res.status(400).json({ message: 'Like déjà ajouté.' });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Ajouter un commentaire à un post
  addComment: async (req, res) => {
    try {
      const { userId, postId } = req.params;
      const { texte } = req.body;

      // Vérifie si le post existe
      const post = await Post.findById(postId);

      if (!post) {
        return res.status(404).json({ message: 'Post non trouvé.' });
      }

      // Ajoute le commentaire
      const nouveauCommentaire = { auteur: userId, texte };
      post.commentaires.push(nouveauCommentaire);
      await post.save();

      res.json({ message: 'Commentaire ajouté avec succès.' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // ...
};

module.exports = PostController;
