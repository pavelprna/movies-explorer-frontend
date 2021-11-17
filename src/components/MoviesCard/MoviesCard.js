import { useState } from 'react';
import { formatDuration } from '../../utils/utils';
import './MoviesCard.css';

function MoviesCard({ movie, onSave, onRemove, isSaved }) {
  const { image, nameRU, duration, trailer } = movie;
  const [saved, setSaved] = useState(isSaved);

  const handleSave = () => {
    onSave(movie)
    setSaved(true);
  }

  const handleRemove = () => {
    onRemove(movie)
    setSaved(false)
  }

  return (
    <li className="movies__list-item">
      <article className="movies-card">
        <a href={trailer} target="_blank" rel="noreferrer" className="movie__trailer-link">
          <img src={image} alt={nameRU} className="movies-card__image" />
        </a>
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{formatDuration(duration)}</p>
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
