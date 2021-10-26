import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Promo from "../Promo/Promo.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Promo />
      </Main>
    </BrowserRouter>
  );
}

export default App;
