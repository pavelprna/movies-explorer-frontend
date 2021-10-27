import { BrowserRouter } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import NavTab from "../NavTab/NavTab.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Promo from "../Promo/Promo.js";
import Techs from "../Techs/Techs.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe>
          <Portfolio />
        </AboutMe>
      </Main>
    </BrowserRouter>
  );
}

export default App;
