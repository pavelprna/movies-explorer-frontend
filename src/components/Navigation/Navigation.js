import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleBurgerClick = () => {
    setIsOpened(!isOpened);
  }

  return (
    <nav className={`navigation ${isOpened ? 'navigation_opened' : ''}`}>
      <ul className={`navigation__list ${isOpened ? 'navigation__list_visible' : ''}`}>
        {isOpened &&
          <li className="navigation__list-item">
            <NavLink to='/' className='header__link navigation__link'>Главная</NavLink>
          </li>
        }
        <li className="navigation__list-item">
          <NavLink to='/movies' className='header__link navigation__link' activeClassName='navigation__link_active'>Фильмы</NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to='/saved-movies' className='header__link navigation__link' activeClassName='navigation__link_active'>Сохранённые фильмы</NavLink>
        </li>
        <li className="navigation__list-item">
          <Link to='/profile' className="navigation__button">Аккаунт</Link>
        </li>
      </ul>
      <button onClick={handleBurgerClick} className={`burger ${isOpened ? 'burger_opened' : ''}`}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </button>
    </nav>
  )
}

export default Navigation;
