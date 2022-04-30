// API Key (v3 auth) - 0bed3335ab0850eab399fa490cae1e43
// Example API Request - https://api.themoviedb.org/3/movie/550?api_key=0bed3335ab0850eab399fa490cae1e43
// API Read Access Token (v4 auth) - eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmVkMzMzNWFiMDg1MGVhYjM5OWZhNDkwY2FlMWU0MyIsInN1YiI6IjYyNjhhNGMzMTk2NzU3MDA1MWEyNzlmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jGR9fPyrcCjd_XVgVbfqUN---9wsnlxRUP0nT1ninXs

const BASE_URL = "https://api.themoviedb.org/3";
// export const GET_MOVIES = `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`;

const API_KEY = "0bed3335ab0850eab399fa490cae1e43";
const requests = {
  API_KEY: "0bed3335ab0850eab399fa490cae1e43",
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
// https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
export default requests;
