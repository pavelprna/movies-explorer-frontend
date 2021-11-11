import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ movieImage, movieTitle, movieDuration }) {
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    setSaved(!saved);
  }

  return (
    <li className="movies__list-item">
      <article className="movies-card">
        <img onClick={handleClick} src={movieImage} alt={movieTitle} className="movies-card__image" />
        <h2 className="movies-card__title">{movieTitle}</h2>
        <p className="movies-card__duration">{movieDuration}</p>
        {
          saved
            ? <button onClick={handleClick} className="movies-card__badge movies-card__saved-badge"></button>
            : <button onClick={handleClick} className="movies-card__badge movies-card__save-badge">Сохранить</button>
        }
      </article>
    </li>
  );
}

export default MoviesCard;
