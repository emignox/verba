const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  //_id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  country: {type: String, required: true},
  year: { type: Number, required: true },
  password: { type: String, required: true },
  picture: { type: String },
  biography: { type: String },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: {type: Boolean, default: true},
  inscription: { type: Date, default: Date.now },
}, { timestamps: true });

// Hashage du mot de passe avant de sauvegarder l'utilisateur
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
