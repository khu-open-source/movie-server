import express from 'express';
let connectDB = require('../schemas/index');

const dbRouter = express.Router();

dbRouter.get('/', function (req, res) {
  connectDB();
  res.send('DB connected');
});

export default dbRouter;
