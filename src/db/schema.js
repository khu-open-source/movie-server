import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltRounds = 12;

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

// 몽고디비 method 'save' 가 실행되기 전에 실행되어 Userpassword 해싱
UserSchema.pre('save', function (next) {
  const user = this; // UserSchema를 가르킴

  if (user.isModifiied('UserPassword')) {
    // password가 변경될 때만 Hashing 실행
    // genSalt: salt 생성
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hashedPassword) {
        // hash의 첫번째 인자: 비밀번호의 Plain Text
        if (err) return next(err);
        user.UserPassword = hashedPassword; // 에러없이 성공하면 비밀번호의 Plain Text를 hashedPassword로 교체해줌
        next(); // Hashing이 끝나면 save로 넘어감
      });
    });
  } else {
    // password가 변경되지 않을 때
    next(); // 바로 save로 넘어감
  }
});

export default mongoose.model('User', UserSchema);
