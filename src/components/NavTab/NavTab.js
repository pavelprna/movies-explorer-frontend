import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <Link to='/' className="nav-tab__link">О проекте</Link>
        </li>
        <li className="nav-tab__item">
          <Link to='/' className="nav-tab__link">Технологии</Link>
        </li>
        <li className="nav-tab__item">
          <Link to='/' className="nav-tab__link">Студент</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;
