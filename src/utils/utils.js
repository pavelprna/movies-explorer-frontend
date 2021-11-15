import { MOVIE_API_URL } from "./constants"

export const parseMovies = (movies) => {
  return movies.map((movie) => ({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    image: MOVIE_API_URL + movie.image.url,
    trailer: movie.trailerLink,
    thumbnail: MOVIE_API_URL + movie.image.formats.thumbnail.url,
    movieId: movie.id,
  }))
}

export const filterMovie = (movie, value) => {
  const lowerCaseNameRU = movie.nameRU?.toLowerCase();
  const lowerCaseNameEN = movie.nameEN?.toLowerCase();

  return (lowerCaseNameRU?.includes(value) || lowerCaseNameEN?.includes(value));
}