const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  auteur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contenu: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  commentaires: [{
    auteur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    texte: { type: String, required: true },
  }],
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;