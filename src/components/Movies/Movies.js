import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCard from '../MoviesCard/MoviesCard';
import Navigation from '../Navigation/Navigation';

import moviesApi from '../../utils/MoviesApi';
import { useState } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);

  const handleSubmit = (value) => {
    console.log(value)
    moviesApi.getMovies()
      .then(list => {
        console.log(list[0])
        const findedMovies = list.filter((movie) => {
          if (movie.nameRU?.toLowerCase().includes(value) || movie.nameEN?.toLowerCase().includes(value)) {
            return true;
          }
          return false;
        })
        console.log(findedMovies)
        setMovies(findedMovies)
      })
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm onSubmit={handleSubmit}>
        <FilterCheckbox />
      </SearchForm>
      <MoviesCardList>
        {
          movies.map(movie => <MoviesCard movieData={movie} />)
        }
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default Movies;
