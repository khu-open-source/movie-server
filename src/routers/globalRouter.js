import express from 'express';

const globalRouter = express.Router();

export const index = async (req, res) => {
  res.send('this is index');
};

globalRouter.get('/', index);

export default globalRouter;
