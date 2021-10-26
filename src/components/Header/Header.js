import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className="header__container">
        <Link to='/' className='header__logo'></Link>
        <Link to='/signup' className='header__link header__link_type_signup'>Регистрация</Link>
        <Link to='/signin' className='header__link header__button button'>Вход</Link>
      </div>
    </header>
  )
}

export default Header;
