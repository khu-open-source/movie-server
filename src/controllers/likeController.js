import { Like } from '../db/schema';
const mongoose = require('mongoose');

export const addLike = function (req, res) {
  const likemovie = new Like({
    _id: new mongoose.Types.ObjectId(),

    id: req.body.id,

    title: req.body.title,

    release_date: req.body.release_date,
  });
  likemovie.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};
