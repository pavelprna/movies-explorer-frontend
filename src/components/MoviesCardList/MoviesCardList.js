import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return (
    <section className="movies section__container">
      <ul className="movies__list">
        {children}
      </ul>
    </section>
  );
}

export default MoviesCardList;
