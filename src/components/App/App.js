import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import NotFound from "../NotFound/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main />
          <Footer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
