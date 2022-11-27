import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken'); //여기 슈발

const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  id: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minLength: 5,
  },
});

//save 메소드가 실행되기전에 비밀번호를 암호화하는 로직을 짜야한다
userSchema.pre('save', function (next) {
  let user = this;

  //model 안의 paswsword가 변환될때만 암호화
  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

//여기서부터 슈발
userSchema.methods.comparePassword = function (plainPassword) {
  //plainPassword를 암호화해서 현재 비밀번호화 비교
  return bcrypt
    .compare(plainPassword, this.password)
    .then((isMatch) => isMatch)
    .catch((err) => err);
};

userSchema.methods.generateToken = function () {
  // let user = this;
  const token = jwt.sign(this._id.toHexString(), 'secretToken');
  this.token = token;
  return this.save()
    .then((user) => user)
    .catch((err) => err);
};
//여기까지 슈발

const User = mongoose.model('test1', userSchema); //최종할때 모델명 변경할것

module.exports = { User };
