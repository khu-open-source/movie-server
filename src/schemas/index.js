const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb+srv://zackinthebox:hsp0509@cluster0.wsv9sfu.mongodb.net/?retryWrites=true&w=majority', {
      //useNewUrlPaser: true,
      //useUnifiedTofology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
