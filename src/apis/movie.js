import axiosClient from './apiClient';

export const getNowPlayingMoives = async () => {
  return await axiosClient.get(`/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US`);
};

export const getPopularMoives = async () => {
  return await axiosClient.get(`/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US`);
};
