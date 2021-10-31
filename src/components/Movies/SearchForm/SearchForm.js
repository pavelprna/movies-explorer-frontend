import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search section">
    <form className="search-form">
      <input type="text" className="search-form__input" placeholder="Фильм" />
      <button type="submit" className="search-form__button" />
    </form>

    </section>
  )
}

export default SearchForm;