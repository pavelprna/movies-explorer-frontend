import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Header />
      </Main>
    </BrowserRouter>
  );
}

export default App;
