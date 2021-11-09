import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCard from '../MoviesCard/MoviesCard';

import movieOne from '../../images/examples/movie-1.jpg';
import movieTwo from '../../images/examples/movie-2.jpg';
import movieThree from '../../images/examples/movie-3.jpg';
import movieFour from '../../images/examples/movie-4.jpg';
import movieFive from '../../images/examples/movie-5.jpg';
import Navigation from '../Navigation/Navigation';

function Movies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm>
        <FilterCheckbox />
      </SearchForm>
      <MoviesCardList>
        <MoviesCard movieImage={movieOne} movieTitle='33 слова о дизайне' movieDuration='1ч 17м' />
        <MoviesCard movieImage={movieTwo} movieTitle='Киноальманах «100 лет дизайна»' movieDuration='1ч 17м' />
        <MoviesCard movieImage={movieThree} movieTitle='В погоне за Бенкси' movieDuration='1ч 17м' />
        <MoviesCard movieImage={movieFour} movieTitle='Баския: Взрыв реальности' movieDuration='1ч 17м' />
        <MoviesCard movieImage={movieFive} movieTitle='Бег это свобода' movieDuration='1ч 17м' />
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default Movies;
