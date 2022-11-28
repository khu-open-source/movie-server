import express from 'express';
import { handleGenreMoive, handleMoive, handlePopularMoive } from '../controllers/movieController';

const movieRouter = express.Router();

movieRouter.get('/', handleMoive);
movieRouter.get('/popular', handlePopularMoive);
movieRouter.get('/discover', handleGenreMoive);

export default movieRouter;
