import { getNowPlayingMoives } from '../apis/movie';
import { getPopularMoives } from '../apis/movie';

export const handleMoive = async (req, res) => {
  const movies = await getNowPlayingMoives();
  console.log(movies.data);
  res.send('success');
};

export const handlePopularMoive = async (req, res) => {
  const popularMovies = await getPopularMoives();
  console.log(popularMovies.data);
  res.send(popularMovies.data);
};
