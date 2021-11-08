import './Header.css';
import { Link } from 'react-router-dom';

function Header({ children, color }) {
  return (
    <header className={`header ${color ? 'header_color_' + color : ''}`}>
      <div className="header__container">
        <Link to='/' className='header__logo'></Link>
        {children}
      </div>
    </header>
  )
}

export default Header;
