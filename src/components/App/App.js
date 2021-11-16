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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";

function App() {
  const [currentUser, setCurrentUser] = useState({ _id: '', name: '', email: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [isToooltipOpened, setIsTooltipOpened] = useState(true);
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
        .catch(err => console.log(err))
    }
  }, [loggedIn]);

  // USER

  const tokenCheck = useCallback(() => {
    mainApi.getUser()
      .then((user) => {
        setCurrentUser(user)
        setLoggedIn(true)
          history.push('/movies');
        
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
      .then(res => {
        setLoggedIn(true)
        tokenCheck();
        openTooltip({
          success: true,
          message: res.message,
        })
      })
      .catch(err => console.log(err))
  }

  const handleUserUpdate = ({ name, email }) => {
    mainApi.updateUser({ name, email })
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err))
  }

  const handleLogout = () => {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false)
        setCurrentUser({ _id: '', name: '', email: '' })
        setSavedMovies([])
        history.push('/')
      })
      .catch(err => console.log(err))
  }

  // MOVIES

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then(movie => {
        setSavedMovies([movie, ...savedMovies])
        const savedList = localStorage.getItem('savedMovies').split();
        localStorage.setItem('savedMovies', [...savedList, movie.movieId.toString()])
      })
      .catch(err => console.log(err))
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

  // TOOLTIP

  const openTooltip = ({ success, message }) => {
    setIsSuccess(success);
    setTooltipMessage(message);
    setIsTooltipOpened(true);
    setTimeout(handleCloseTooltip, 2000)
  }

  const handleCloseTooltip = () => {
    setIsTooltipOpened(false);
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseTooltip();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    const closeByClick = (e) => {
      if (e.target.classList.contains("popup_opened")) {
        handleCloseTooltip();
      }
    };

    document.addEventListener("mousedown", closeByClick);

    return () => document.removeEventListener("mousedown", closeByClick);
  }, []);

  return (
    <currentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <ProtectedRoute
          path='/movies'
          loggedIn={loggedIn}
          movies={initialMovies}
          onSave={handleSaveMovie}
          savedMovies={savedMovies}
          onRemove={handleRemoveMovie}
          component={Movies}
        />
        <ProtectedRoute
          path='/saved-movies'
          loggedIn={loggedIn}
          movies={savedMovies}
          onRemove={handleRemoveMovie}
          component={SavedMovies}
        />
        <ProtectedRoute
          path='/profile'
          loggedIn={loggedIn}
          onSubmit={handleUserUpdate}
          onLogout={handleLogout}
          component={Profile}
        />
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
      <InfoTooltip isOpen={isToooltipOpened} message={tooltipMessage} success={isSuccess} onClose={handleCloseTooltip} />
    </currentUserContext.Provider>
  );
}

export default withRouter(App);
