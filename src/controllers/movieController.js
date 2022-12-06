import { getNowPlayingMoives } from '../apis/movie';
import { getPopularMoives } from '../apis/movie';

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

const genres = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};
