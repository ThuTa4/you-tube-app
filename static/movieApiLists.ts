const apiKey = "c7236663fdf1f30d40eb135279aadead";

export const narutoApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Naruto&language=en-US&page=1`;
export const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=4`;
export const playingApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

export const apiLists = (
  movieType: "movie" | "tv",
  movieId: string | number
) => {
  return {
    detailsEndPoint: `https://api.themoviedb.org/3/${movieType}/${movieId}?api_key=${apiKey}&language=en-US`,
    videosEndPoint: `https://api.themoviedb.org/3/${movieType}/${movieId}/videos?api_key=${apiKey}&language=en-US`,
    creditsEndPoint: `https://api.themoviedb.org/3/${movieType}/${movieId}/credits?api_key=${apiKey}&language=en-US`,
  };
};

export const popularApiLists = (
  movieType: "movie" | "tv",
  movieId: string | number
) => {
  return {
    detailsEndPoint: `https://api.themoviedb.org/3/movie/popular/${movieId}?api_key=${apiKey}&language=en-US&page=4`,
    videosEndPoint: `https://api.themoviedb.org/3/movie/popular/${movieId}?api_key=${apiKey}&language=en-US&page=4`,
    creditsEndPoint: `https://api.themoviedb.org/3/movie/popular/${movieId}?api_key=${apiKey}&language=en-US&page=4`,
  };
};

export const playingApiLists = (
  movieType: "movie" | "tv",
  movieId: string | number
) => {
  return {
    detailsEndPoint: `https://api.themoviedb.org/3/movie/now_playing/${movieId}api_key=${apiKey}&language=en-US&page=1`,
    videosEndPoint: `https://api.themoviedb.org/3/movie/now_playing/${movieId}?api_key=${apiKey}&language=en-US&page=1`,
    creditsEndPoint: `https://api.themoviedb.org/3/movie/now_playing/${movieId}?api_key=${apiKey}&language=en-US&page=1`,
  };
};
