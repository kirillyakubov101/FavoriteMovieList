import config from "./config";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${config.baseUrl}/movie/popular?api_key=${config.apiKey}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${config.baseUrl}/search/movie?api_key=${
      config.apiKey
    }&query=${encodeURIComponent(query)}`
  );

  const data = await response.json();
  return data.results;
};

export const newGetPopularMovies = async () => {
  var url = "https://localhost:7047/api/movies";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const newSearchMovies = async (query) => {
  var url = `https://localhost:7047/api/movies/search?query=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
