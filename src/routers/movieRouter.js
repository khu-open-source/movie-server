import express from 'express';
import { handleGenreMoive, handleMoive, handlePopularMoive, handleSearchMoive } from '../controllers/movieController';

const movieRouter = express.Router();

movieRouter.get('/', handleMoive);
movieRouter.get('/popular', handlePopularMoive);
movieRouter.get('/discover', handleGenreMoive);
movieRouter.get('/search', handleSearchMoive);

export default movieRouter;
