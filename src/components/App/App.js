import { Route, Switch, useHistory, useLocation, withRouter } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {

    }
  }, [loggedIn]);

  const tokenCheck = useCallback(() => {
    mainApi.getUser()
      .then((user) => {
        setCurrentUser(user)
        setLoggedIn(true)
        if (location.pathname === '/signin' || location.pathname === '/signup') {
          history.push('/movies');
        } else {
          history.push(location.pathname);
        }
      })
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])

  const handleSignIn = ({ name, email, password }) => {
    mainApi.createUser({ name, email, password })
      .then(user => {
        mainApi.signIn({ email: user.email, password })
          .then(user => {
            setCurrentUser(user);
            setLoggedIn(true)
            history.push('/movies');
          })
      })
      .catch((err) => console.log(err))
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
