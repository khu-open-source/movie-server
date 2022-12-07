import { getNowPlayingMoives } from '../apis/movie';
import { getPopularMoives } from '../apis/movie';
import { getGenreMoives } from '../apis/movie';
import { getSearchMoives } from '../apis/movie';
import { genres } from '../constants';

export const handleMoive = async (req, res) => {
  const movies = await getNowPlayingMoives();
  console.log(movies.data);
  res.send('success');
};

export const handlePopularMoive = async (req, res) => {
  const popularMovies = await getPopularMoives(req.query.page);
  const results = popularMovies.data['results'];
  for (const rst in results) {
    var genreIds = results[rst]['genre_ids'];
    var genreStrings = [];
    for (const id in genreIds) {
      const genreId = genreIds[id];
      genreStrings.push(genres[genreId]);
    }
    results[rst].genre_ids = genreStrings;

    results[rst]['genreList'] = results[rst]['genre_ids'];
    delete results[rst]['genre_ids'];
  }
  res.json(results);
};

export const handleGenreMoive = async (req, res) => {
  const genreId = genreIndex[req.query.genre];
  const genreMovies = await getGenreMoives(genreId);
  const genreDiscovers = genreMovies.data['results'];
  console.log(genreDiscovers);
  res.send(genreDiscovers);
};

export const handleSearchMoive = async (req, res) => {
  const movieTitle = req.query.title;
  // console.log(req.query.title);
  const movieSearched = await getSearchMoives(movieTitle);
  console.log(movieSearched.data);
  res.send(movieSearched.data);
};
