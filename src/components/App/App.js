import { BrowserRouter } from "react-router-dom";
import AboutProject from "../AboutProject/AboutProject.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import NavTab from "../NavTab/NavTab.js";
import Promo from "../Promo/Promo.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Promo />
        <NavTab />
        <AboutProject />
      </Main>
    </BrowserRouter>
  );
}

export default App;
