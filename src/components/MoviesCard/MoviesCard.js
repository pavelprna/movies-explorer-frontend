import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ movieData }) {
  const { image, nameRU } = movieData;
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    setSaved(!saved);
  }

  return (
    <li className="movies__list-item">
      <article className="movies-card">
        <img onClick={handleClick} src={`https://api.nomoreparties.co${image.url}`} alt={nameRU} className="movies-card__image" />
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{34}</p>
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
