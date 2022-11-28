import axiosClient from './apiClient';

export const getNowPlayingMoives = async () => {
  return await axiosClient.get(`/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US`);
};

export const getPopularMoives = async (page) => {
  //파라미터로 페이지넘버 받아서 아래 주소에 쿼리로 해당 페이지로 요청
  return await axiosClient.get(`/movie/popular?page=${page}&api_key=${process.env.TMDB_KEY}&language=en-US`);
};

export const getGenreMoives = async (genre) => {
  return await axiosClient.get(`/discover/movie?with_genres=${genre}&api_key=${process.env.TMDB_KEY}&language=en-US`);
};
