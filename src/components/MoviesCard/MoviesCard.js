import './MoviesCard.css';

function MoviesCard({ movieImage, movieTitle, movieDuration }) {
  return (
    <li className="movies__list-item">
      <article className="movies-card">
        <img src={movieImage} alt="" className="movies-card__image" />
        <h2 className="movies-card__title">{movieTitle}</h2>
        <p className="movies-card__duration">{movieDuration}</p>
      </article>
    </li>
  );
}

export default MoviesCard;
