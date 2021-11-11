import './SearchForm.css';

function SearchForm({ children }) {
  return (
    <section className="search section">
      <div className="section__container search__container">
        <form className="search-form" required>
          <input type="text" className="search-form__input" placeholder="Фильм" />
          <button type="submit" className="search-form__button" />
        </form>
        {children}

      </div>
    </section>
  )
}

export default SearchForm;