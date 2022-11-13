import express from 'express';
import { handleMoive } from '../controllers/movieController';

const movieRouter = express.Router();

movieRouter.get('/', handleMoive);

export default movieRouter;
