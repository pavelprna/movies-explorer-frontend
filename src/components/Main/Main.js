import { Link } from 'react-router-dom';
import AboutMe from "../AboutMe/AboutMe.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import NavTab from "../NavTab/NavTab.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Promo from "../Promo/Promo.js";
import Techs from "../Techs/Techs.js";

function Main() {
  return (
    <>
      <Header color='green'>
        <Link to='/signup' className='header__link header__link_type_signup'>Регистрация</Link>
        <Link to='/signin' className='header__link header__button button'>Вход</Link>
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe>
        <Portfolio />
      </AboutMe>
      <Footer />
    </>
  )
}

export default Main;
