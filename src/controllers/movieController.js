import { getNowPlayingMoives } from '../apis/movie';
import { getPopularMoives } from '../apis/movie';
import { getGenreMoives } from '../apis/movie';
import { getSearchMoives } from '../apis/movie';
import { getKeyByValue } from '../constants';
import { genres } from '../constants';

export const handleMoive = async (req, res) => {
  const movies = await getNowPlayingMoives();
  res.json(movies.data);
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
  const genreId = getKeyByValue(genres, req.query.genre);
  const genreMovies = await getGenreMoives(genreId);
  const genreDiscovers = genreMovies.data['results'];
  for (const rst in genreDiscovers) {
    var genreIds = genreDiscovers[rst]['genre_ids'];
    var genreStrings = [];
    for (const id in genreIds) {
      const genreId = genreIds[id];
      genreStrings.push(genres[genreId]);
    }
    genreDiscovers[rst].genre_ids = genreStrings;

    genreDiscovers[rst]['genreList'] = genreDiscovers[rst]['genre_ids'];
    delete genreDiscovers[rst]['genre_ids'];
  }
  res.json(genreDiscovers);
};

export const handleSearchMoive = async (req, res) => {
  const movieTitle = req.query.title;
  const movieSearched = await getSearchMoives(movieTitle);
  const searchData = movieSearched.data['results'];
  for (const rst in searchData) {
    var genreIds = searchData[rst]['genre_ids'];
    var genreStrings = [];
    for (const id in genreIds) {
      const genreId = genreIds[id];
      genreStrings.push(genres[genreId]);
    }
    searchData[rst].genre_ids = genreStrings;

    searchData[rst]['genreList'] = searchData[rst]['genre_ids'];
    delete searchData[rst]['genre_ids'];
  }
  res.json(searchData);
};
