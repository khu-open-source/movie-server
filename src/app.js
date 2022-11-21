import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import globalRouter from './routers/globalRouter';
import movieRouter from './routers/movieRouter';
import loginRouter from './routers/loginRouter';
import registerRouter from './routers/registerRouter';

const bodyParser = require('body-parser');
const app = express();
const logger = morgan('dev');

app.use(logger);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    // secret: process.env.SESSION_SECRET,
    secret: 'keyboard cat',
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);
app.use('/', globalRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/movie', movieRouter);

export default app;
