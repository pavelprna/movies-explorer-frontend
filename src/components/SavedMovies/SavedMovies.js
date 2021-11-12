import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm>
        <FilterCheckbox />
      </SearchForm>
      <MoviesCardList>
        {/* <MoviesCard movieImage={movieTwo} movieTitle='Киноальманах «100 лет дизайна»' movieDuration='1ч 17м' />
        <MoviesCard movieImage={movieThree} movieTitle='В погоне за Бенкси' movieDuration='1ч 17м' />
        <MoviesCard movieImage={movieFour} movieTitle='Баския: Взрыв реальности' movieDuration='1ч 17м' /> */}
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default SavedMovies;
