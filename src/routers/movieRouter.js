import express from 'express';
import { handleMoive, handlePopularMoive } from '../controllers/movieController';

const movieRouter = express.Router();

movieRouter.get('/', handleMoive);
movieRouter.get('/popular', handlePopularMoive);

export default movieRouter;
