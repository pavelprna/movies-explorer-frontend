import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ movies, onRemove, loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm>
        <FilterCheckbox />
      </SearchForm>
      <MoviesCardList>
        {
          movies.map((movie) => <MoviesCard key={movie._id} movie={movie} onRemove={onRemove} isSaved={true} />)
        }
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default SavedMovies;
