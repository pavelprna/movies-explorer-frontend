import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import MoviesCard from '../MoviesCard/MoviesCard';
import { windowSizes, cardsNumbers, nextCardsNumbers } from '../../utils/constants';

function MoviesCardList({ movies, onSave, onRemove }) {
  const location = useLocation();
  const [cardsToShow, setCardsToShow] = useState([]);
  const [cardsPerPage, setCardsPerPage] = useState(0);
  const [nextCards, setNextCards] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function checkWindowWidth() {
    setTimeout(() => setWindowWidth(window.innerWidth), 500);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);

    if (windowWidth > windowSizes.desktop) {
      setCardsPerPage(cardsNumbers.desktop);
      setNextCards(nextCardsNumbers.desktop);
    } else if (windowWidth > windowSizes.mobile && windowWidth <= windowSizes.desktop) {
      setCardsPerPage(cardsNumbers.tablet);
      setNextCards(nextCardsNumbers.tablet);
    } else if (windowWidth <= windowSizes.mobile) {
      setCardsPerPage(cardsNumbers.mobile);
      setNextCards(nextCardsNumbers.mobile);
    }

    return () => window.removeEventListener('resize', checkWindowWidth);
  }, [windowWidth]);

  useEffect(() => {
    if (location.pathname === '/movies') {
      setCardsToShow(movies.slice(0, cardsPerPage));
    } else {
      setCardsToShow(movies);
    }
  }, [cardsPerPage, location.pathname, movies]);

  function handleShowMoreCards() {
    setCardsToShow(movies.slice(0, cardsToShow.length + nextCards));
  };

  return (
    <>
      <ul className="movies__list">
        {
          cardsToShow.map(movie => <MoviesCard
            key={movie.movieId.toString()}
            movie={movie}
            onSave={onSave}
            onRemove={onRemove}
            isSaved={localStorage.getItem('savedMovies').split(',').includes(String(movie.movieId))} />)
        }
      </ul>
      {
        location.pathname === '/movies' && movies.length > cardsToShow.length &&
        <button className="movies__more-button" onClick={handleShowMoreCards} type="button">Ещё</button>
      }
    </>
  );
}

export default MoviesCardList;
