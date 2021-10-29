import AboutMe from "../AboutMe/AboutMe.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Header from "../Header/Header.js";
import NavTab from "../NavTab/NavTab.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Promo from "../Promo/Promo.js";
import Techs from "../Techs/Techs.js";

function Main() {
  return (
    <>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe>
        <Portfolio />
      </AboutMe>
    </>
  )
}

export default Main;
