import { getNowPlayingMoives } from '../apis/movie';
import { getPopularMoives } from '../apis/movie';

export const handleMoive = async (req, res) => {
  const movies = await getNowPlayingMoives();
  console.log(movies.data);
  res.send('success');
};

export const handlePopularMoive = async (req, res) => {
  // getPopularMovies(..) 파라미터로 req.query 넣어주기
  const popularMovies = await getPopularMoives();
  //여기서 한 페이지에서 result 값 접근
  const results = popularMovies.data['results'];
  for (const rst in results) {
    var genreIds = results[rst]['genre_ids'];
    var genreStrings = [];
		for (const id in genreIds) {
			const genreId = genreIds[id];
			genreStrings.push(genres[genreId]);
			//genreStrings로 data의 값 바꿔주기 (for문 끝나기 전에)
		};
	results[rst].genre_ids = genreStrings;

	results[rst]['genreList'] = results[rst]['genre_ids'];
	delete results[rst]['genre_ids'];
	console.log(results[rst]);
  };
	
  res.json(results);
};

const genres = {
	 28: 'Action',
   12: 'Adventure',
   16: 'Animation' ,
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
   37: 'Western' 
	};

