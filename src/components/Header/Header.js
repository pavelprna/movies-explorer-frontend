import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ children, color, loggedIn }) {
  return (
    <header className={`header ${color ? 'header_color_' + color : ''}`}>
      <div className="header__container">
        <Link to='/' className='header__logo'></Link>
        {loggedIn
          ? <Navigation />
          : <>
            <Link to='/signup' className='header__link header__link_type_signup'>Регистрация</Link>
            <Link to='/signin' className='header__link header__button button'>Вход</Link>
          </>
        }
        {children}
      </div>
    </header>
  )
}

export default Header;
