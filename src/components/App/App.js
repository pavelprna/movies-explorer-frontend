import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";


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
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
