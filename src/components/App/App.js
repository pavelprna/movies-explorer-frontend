import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import { useState } from "react";
import { currentUserContext } from "../../contexts/CurrentUserContext.js";
import mainApi from "../../utils/MainApi.js";
import Login from "../Login/Login.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  const handleSignIn = ({ name, email, password }) => {
    mainApi.createUser({ name, email, password })
      .then(user => {
        mainApi.signIn({ email: user.email, password })
          .then(user => {
            setCurrentUser(user);
            history.push('movies');
          })
      })
      .catch((err, res) => console.log(err, res))
  }

  return (
    <currentUserContext.Provider value={currentUser}>
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
          <Register onSubmit={handleSignIn} />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </currentUserContext.Provider>
  );
}

export default withRouter(App);
