import './Movies.css';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './SearchForm/FilterCheckbox/FilterCheckbox';

function Movies() {
  return (
    <>
      <Header />
      <SearchForm>
        <FilterCheckbox />
      </SearchForm>
      <MoviesCardList />
    </>
  )
}

export default Movies;
