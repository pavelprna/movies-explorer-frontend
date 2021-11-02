import './SearchForm.css';

function SearchForm({ children }) {
  return (
    <section className="search section">
      <form className="search-form section__container">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button type="submit" className="search-form__button" />
      </form>
      {children}
    </section>
  )
}

export default SearchForm;