import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, onSave, onRemove, isSaved, onClick }) {
  const { image, nameRU, duration } = movie;
  const [saved, setSaved] = useState(isSaved);

  const handleSave = () => {
    onSave(movie)
    setSaved(true);
  }

  const handleRemove = () => {
    onRemove(movie)
    setSaved(false)
  }

  const handleClick = () => {
    onClick(movie)
  }

  return (
    <li className="movies__list-item">
      <article className="movies-card">
        <img onClick={handleClick} src={image} alt={nameRU} className="movies-card__image" />
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{duration}</p>
        {
          saved
            ? <button onClick={handleRemove} className="movies-card__badge movies-card__saved-badge"></button>
            : <button onClick={handleSave} className="movies-card__badge movies-card__save-badge">Сохранить</button>
        }
      </article>
    </li>
  );
}

export default MoviesCard;
