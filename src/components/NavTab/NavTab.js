import { Link } from 'react-scroll';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <Link to='about-project' smooth={true} duration={500} className="nav-tab__link">О проекте</Link>
        </li>
        <li className="nav-tab__item">
          <Link to='techs' smooth={true} duration={500} className="nav-tab__link">Технологии</Link>
        </li>
        <li className="nav-tab__item">
          <Link to='about-me' smooth={true} duration={500} className="nav-tab__link">Студент</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;
