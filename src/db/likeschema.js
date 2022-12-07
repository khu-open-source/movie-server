import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  _id: Schema.Types.ObjectId,

  id: { type: Number },

  title: { type: String },

  release_date: { type: String },
});

const Like = mongoose.model('LIKE', likeSchema); //최종할때 모델명 변경할것

module.exports = { Like };
