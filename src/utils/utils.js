import { MOVIE_API_URL, SHORT_FILM_DURATION } from "./constants"

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

export const filterMovie = (movie, value, checkbox) => {
  const lowerCaseNameRU = movie.nameRU?.toLowerCase();
  const lowerCaseNameEN = movie.nameEN?.toLowerCase();
  const isShortFilm = movie.duration <= SHORT_FILM_DURATION;

  if (checkbox) {
    return isShortFilm && (lowerCaseNameRU?.includes(value) || lowerCaseNameEN?.includes(value));
  }
  return (lowerCaseNameRU?.includes(value) || lowerCaseNameEN?.includes(value));
}

export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  let minutes = Math.floor(duration % 60);
  if (minutes < 10) minutes = '0' + minutes;
  return (hours ? hours + 'ч ' : '') + minutes + 'м'
}