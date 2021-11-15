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
import moviesApi from "../../utils/MoviesApi.js";
import { parseMovies } from "../../utils/utils.js";

function App() {
  const [currentUser, setCurrentUser] = useState({ _id: '', name: '', email: ''});
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [mainMovies, setMainMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
        .then(([movies, mainMovies]) => {
          const parsedMovies = parseMovies(movies);
          setInitialMovies(parsedMovies);
          setMainMovies(mainMovies);
          const savedList = mainMovies.filter(movie => (movie.owner === currentUser._id))
          setSavedMovies(savedList);
          localStorage.setItem('savedMovies', savedList.map((movie) => movie.movieId))
        })
    }
  }, [loggedIn]);

  // USER

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

  const handleSignUp = ({ name, email, password }) => {
    mainApi.createUser({ name, email, password })
      .then(user => handleSignIn({ email: user.email, password }))
      .catch((err) => console.log(err))
  }

  const handleSignIn = ({ email, password }) => {
    mainApi.signIn({ email, password })
      .then(user => {
        setCurrentUser(user);
        setLoggedIn(true)
        history.push('/movies');
      })
  }

  const handleUserUpdate = ({ name, email }) => {
    mainApi.updateUser({ name, email })
      .then()
  }

  const handleLogout = () => {
    mainApi.signOut();
    history.push('/')
  }

  // MOVIES

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then(movie => {
        setSavedMovies([movie, ...savedMovies])
        const savedList = localStorage.getItem('savedMovies').split();
        localStorage.setItem('savedMovies', [...savedList, movie.movieId.toString()])
      })
  }

  const handleRemoveMovie = (movie) => {
    const savedMovie = savedMovies.find((item) => item.movieId === movie.movieId)
    mainApi.removeMovie(savedMovie._id)
      .then(res => {
        setSavedMovies(savedMovies.filter((item) => item._id !== savedMovie._id))
        const savedList = localStorage.getItem('savedMovies').split(',');
        localStorage.setItem('savedMovies', savedList.filter((id) => id !== movie.movieId.toString()))
      })
      .catch(err => console.log(err))
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies movies={initialMovies} onSave={handleSaveMovie} savedMovies={savedMovies} onRemove={handleRemoveMovie} />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies movies={savedMovies} onRemove={handleRemoveMovie} />
        </Route>
        <Route path='/profile'>
          <Profile onSubmit={handleUserUpdate} onLogout={handleLogout} />
        </Route>
        <Route path='/signup'>
          <Register onSubmit={handleSignUp} />
        </Route>
        <Route path='/signin'>
          <Login onSubmit={handleSignIn} />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </currentUserContext.Provider>
  );
}

export default withRouter(App);
