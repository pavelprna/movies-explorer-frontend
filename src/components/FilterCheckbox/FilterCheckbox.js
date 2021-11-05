import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      Короткометражки
      <input type="checkbox" name="" className="filter-checkbox__input" />
      <span className="filter-checkbox__switch"></span>
    </label>
  )
}

export default FilterCheckbox;
