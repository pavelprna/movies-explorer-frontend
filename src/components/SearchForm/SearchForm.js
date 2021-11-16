import './SearchForm.css';

function SearchForm({ children, onSubmit, onChange, values }) {
  const handleChange = (e) => {
    onChange(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit()
  }

  return (
    <section className="search section">
      <div className="section__container search__container">
        <form className="search-form" required>
          <input type="text" name="title" onChange={handleChange} className="search-form__input" placeholder="Фильм" />
          <button type="submit" onClick={handleSubmit} className="search-form__button" />
        </form>
        {children}
      </div>
    </section>
  )
}

export default SearchForm;