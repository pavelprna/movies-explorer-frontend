import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ movies, onRemove }) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
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
