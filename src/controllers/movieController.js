import { getNowPlayingMoives } from "../apis/movie";

export const handleMoive = async (req, res) => {
  const movies = await getNowPlayingMoives();
  console.log(movies.data);
  res.send("success");
};
