import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, onClick}) {



  return (
    <label className="filter-checkbox">
      Короткометражки
      <input type="checkbox" name="short" className="filter-checkbox__input" onChange={onClick} />
      <span className="filter-checkbox__switch"></span>
    </label>
  )
}

export default FilterCheckbox;
