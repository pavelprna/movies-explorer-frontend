import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';
import { filterMovie } from '../../utils/utils';
import { useEffect } from 'react/cjs/react.development';

function Movies({ onSave, onRemove, movies, loggedIn }) {
  const [result, setResult] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isFound, setIsFound] = useState(true);
  const [values, setValues] = useState({ title: '', short: false })

  useEffect(() => {
    if (values.title) {
      handleSubmit()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.short])

  const handleSubmit = () => {
    if (!values.title) {
      return;
    }
    setIsLoaded(false);

    const findedMovies = movies.filter((movie) => filterMovie(movie, values.title, values.short));
    setIsFound(findedMovies.length);
    setResult(findedMovies);
    setTimeout(() => setIsLoaded(true), 1200);

  };

  const handleCheckboxClick = (e) => {
    setValues({ ...values, short: e.target.checked })
  }

  const handleFormChange = (value) => {
    setValues({ ...values, title: value })
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm onSubmit={handleSubmit} onChange={handleFormChange}>
        <FilterCheckbox onClick={handleCheckboxClick} />
      </SearchForm>
      <section className="movies section__container">
      {isLoaded
        ? (
          isFound
            ? <MoviesCardList>
              {result.map(movie => <MoviesCard
                key={movie.movieId.toString()}
                movie={movie}
                onSave={onSave}
                onRemove={onRemove}
                isSaved={localStorage.getItem('savedMovies').split(',').includes(String(movie.movieId))}
              />)}
            </MoviesCardList>
            : <section className="movies section__container movies__not-found">
              <p className="movies__not-found-text">Ничего не найдено</p>
            </section>
        )
        : <Preloader />}
        </section>
      <Footer />
    </>
  )
}

export default Movies;
