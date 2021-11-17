import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import { filterMovie } from '../../utils/utils';
import { useLocation } from 'react-router';

function Movies({ onSave, onRemove, movies, loggedIn, savedMovies, onEmptySearch }) {
  const [result, setResult] = useState(savedMovies || []);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isFound, setIsFound] = useState(true);
  const [values, setValues] = useState({ title: '', short: false })
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      handleSubmit()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.short])

  useEffect(() => {
    setValues({ title: '', short: false })
    setIsFound(true)
  }, [location.pathname])
  
  useEffect(() => {
    setResult(savedMovies || [])
  }, [savedMovies])

  const handleSubmit = () => {
    setIsLoaded(false);
    
    const findedMovies = movies.filter((movie) => filterMovie(movie, values.title, values.short));
    setIsFound(findedMovies.length);
    setResult(findedMovies);
    setTimeout(() => setIsLoaded(true), 1200);
    
  };
  
  const handleButtonClick = () => {
    if (values.title) {
      handleSubmit();
    } else {
      onEmptySearch()
    }
  }

  const handleCheckboxClick = (e) => {
    setValues({ ...values, short: e.target.checked })
  }

  const handleFormChange = (value) => {
    setValues({ ...values, title: value })
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm onSubmit={handleButtonClick} onChange={handleFormChange} value={values.title}>
        <FilterCheckbox onClick={handleCheckboxClick} value={values.short} />
      </SearchForm>
      <section className="movies section__container">
        {isLoaded
          ? (
            isFound
              ? <MoviesCardList movies={result} onSave={onSave} onRemove={onRemove} />
              : <p className="movies__not-found-text">Ничего не найдено</p>
          )
          : <Preloader />}
      </section>
      <Footer />
    </>
  )
}

export default Movies;
