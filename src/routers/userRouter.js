import db from '../db/db';
import { User } from '../db/schema';
import { auth } from '../db/auth';
import express from 'express';
import { login, register, logout } from '../controllers/userController';

const userRouter = express.Router();

db;

userRouter.post('/login', login);
userRouter.post('/join', register);
userRouter.post('/logout', logout);

userRouter.post('/signup', (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

// 여기서부터 로그인
userRouter.post('/login', (req, res) => {
  //로그인을할때 아이디와 비밀번호를 받는다
  User.findOne({ id: req.body.id }, (err, user) => {
    if (err) {
      return res.json({
        loginSuccess: false,
        message: '존재하지 않는 아이디입니다.',
      });
    }
    user
      .comparePassword(req.body.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.json({
            loginSuccess: false,
            message: '비밀번호가 일치하지 않습니다',
          });
        }
        //비밀번호가 일치하면 토큰을 생성한다
        //jwt 토큰 생성하는 메소드 작성
        user
          .generateToken()
          .then((user) => {
            res.cookie('x_auth', user.token).status(200).json({ loginSuccess: true, userId: user._id });
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      })
      .catch((err) => res.json({ loginSuccess: false, err }));
  });
});
//여기까지가 로그인

//여기서 부터
//auth 미들웨어를 가져온다
//auth 미들웨어에서 필요한것 : Token을 찾아서 검증하기
userRouter.get('/auth', auth, (req, res) => {
  //auth 미들웨어를 통과한 상태 이므로
  //req.user에 user값을 넣어줬으므로
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
  });
});
//여기까지가 auth 미들웨어

//여기서부터 로그아웃
userRouter.get('/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    res.clearCookie('x_auth');
    return res.status(200).send({
      success: true,
      goodbye: user.name,
    });
  });
});

export default userRouter;
//여기까지가 로그아웃
