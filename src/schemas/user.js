const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
  UserId: {
    type: String,
    required: true,
    unique: true,
  },
  UserName: {
    type: String,
    required: true,
    unique: true,
  },
  UserPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
