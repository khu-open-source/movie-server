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
  const popularResults = getTitlesById(popularMovies);
  res.json(popularResults);
};

export const handleGenreMoive = async (req, res) => {
  const genreId = getKeyByValue(genres, req.query.genre);
  const genreMovies = await getGenreMoives(genreId);
  const genreResults = getTitlesById(genreMovies);
  res.json(genreResults);
};

export const handleSearchMoive = async (req, res) => {
  const searchMovies = await getSearchMoives(req.query.title);
  const searchResults = getTitlesById(searchMovies);
  res.json(searchResults);
};

function getTitlesById(object) {
  const results = object.data['results'];
  results.forEach((result) => {
    var genreIds = result['genre_ids'];
    var genreStrings = [];
    genreIds.forEach((item) => {
      genreStrings.push(genres[item]);
    });
    result.genre_ids = genreStrings;
    result['genreList'] = result['genre_ids'];
    delete result['genre_ids'];
  });
	return results;
}
