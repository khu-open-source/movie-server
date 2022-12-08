import { Like } from '../db/schema';
const mongoose = require('mongoose');
import { User } from '../db/schema';

export const addLike = function (req, res) {
  const likemovie = new Like({
    _id: new mongoose.Types.ObjectId(),

    name: req.user.name, // logged in user's name

    id: req.body.id,

    title: req.body.title,

    release_date: req.body.release_date,
  });

  User.findOneAndUpdate({ name: req.body.name }, { like: likemovie._id });

  likemovie.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};
