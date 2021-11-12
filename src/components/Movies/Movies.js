import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCard from '../MoviesCard/MoviesCard';
import Navigation from '../Navigation/Navigation';

import moviesApi from '../../utils/MoviesApi';
import { useCallback, useEffect, useState } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  const [isFound, setIsFound] = useState(true);

  const handleSubmit = useCallback(() => {
    setIsLoaded(false);

    moviesApi.getMovies()
      .then(list => {
        const findedMovies = list.filter((movie) => filterMovie(movie, searchString));
        setIsFound(findedMovies.length);
        setMovies(findedMovies);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, [searchString]);

  useEffect(() => {

  }, [handleSubmit])

  const filterMovie = (movie, value) => {
    const lowerCaseNameRU = movie.nameRU?.toLowerCase();
    const lowerCaseNameEN = movie.nameEN?.toLowerCase();

    return (lowerCaseNameRU?.includes(value) || lowerCaseNameEN?.includes(value)) ? true : false;
  }

  const handleFormChange = (value) => {
    setSearchString(value)
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm onSubmit={handleSubmit} onChange={handleFormChange}>
        <FilterCheckbox />
      </SearchForm>
      {isLoaded
        ? (
          isFound
            ? <MoviesCardList>
              {movies.map(movie => <MoviesCard key={movie.id} movieData={movie} />)}
            </MoviesCardList>
            : 'Ничего не найдено'
        )
        : <Preloader />}
      <Footer />
    </>
  )
}

export default Movies;
