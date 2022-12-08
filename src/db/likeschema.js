import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,

  id: { type: Number },

  name: { type: String },

  title: { type: String },

  release_date: { type: String },
});

const Like = mongoose.model('LIKE', likeSchema);

module.exports = { Like };
