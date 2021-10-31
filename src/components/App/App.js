import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import NotFound from "../NotFound/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
