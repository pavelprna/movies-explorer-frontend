import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, onClick, value }) {

  return (
    <label className="filter-checkbox">
      Короткометражки
      <input type="checkbox" name="short" className="filter-checkbox__input" onChange={onClick} checked={value} />
      <span className="filter-checkbox__switch"></span>
    </label>
  )
}

export default FilterCheckbox;
