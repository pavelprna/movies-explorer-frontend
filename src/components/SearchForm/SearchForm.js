import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ children, onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(onSubmit)
    onSubmit(value)
  }

  return (
    <section className="search section">
      <div className="section__container search__container">
        <form className="search-form" required>
          <input type="text" onChange={handleChange} className="search-form__input" placeholder="Фильм" />
          <button type="submit" onClick={handleSubmit} className="search-form__button" />
        </form>
        {children}

      </div>
    </section>
  )
}

export default SearchForm;