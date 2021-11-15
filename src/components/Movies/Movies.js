import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCard from '../MoviesCard/MoviesCard';
import Navigation from '../Navigation/Navigation';
import { useCallback, useEffect, useState } from 'react';
import { filterMovie } from '../../utils/utils';

function Movies({ onSave, onRemove, movies }) {
  const [result, setResult] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  const [isFound, setIsFound] = useState(true);

  const handleSubmit = useCallback(() => {
    setIsLoaded(false);

    const findedMovies = movies.filter((movie) => filterMovie(movie, searchString));
    setIsFound(findedMovies.length);
    setResult(findedMovies);
    setIsLoaded(true);

  }, [movies, searchString]);

  useEffect(() => {

  }, [handleSubmit])

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
              {result.map(movie => <MoviesCard
                key={movie.movieId.toString()}
                movie={movie} 
                onSave={onSave}
                onRemove={onRemove}
                isSaved={localStorage.getItem('savedMovies').split(',').includes(String(movie.movieId))}
              />)}
            </MoviesCardList>
            : 'Ничего не найдено'
        )
        : <Preloader />}
      <Footer />
    </>
  )
}

export default Movies;
