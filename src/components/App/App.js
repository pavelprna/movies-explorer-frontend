import { Route, Switch, useHistory, withRouter, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { currentUserContext } from "../../contexts/CurrentUserContext.js";
import mainApi from "../../utils/MainApi.js";
import Login from "../Login/Login.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import moviesApi from "../../utils/MoviesApi.js";
import { parseMovies } from "../../utils/utils.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";

function App() {
  const [currentUser, setCurrentUser] = useState({ _id: '', name: '', email: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [isToooltipOpened, setIsTooltipOpened] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (loggedIn) {
      Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
        .then(([movies, mainMovies]) => {
          const parsedMovies = parseMovies(movies);
          setInitialMovies(parsedMovies);
          const savedList = mainMovies.filter(movie => (movie.owner === currentUser._id))
          setSavedMovies(savedList);
          localStorage.setItem('savedMovies', savedList.map((movie) => movie.movieId))
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn, currentUser._id]);

  // USER

  const tokenCheck = useCallback(() => {
    mainApi.getUser()
      .then((user) => {
        setCurrentUser(user)
        setLoggedIn(true)
        if (location.pathname === '/signin' || location.pathname === '/signup') {
          history.push('/movies');
        } else {
          history.push(location.pathname)
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
      .then(user => {
        setCurrentUser(user);
        openTooltip({
          success: true,
          message: 'Профиль успешно изменен'
        })
      })
      .catch(err => console.log(err))
  }

  const handleLogout = (e) => {
    e.preventDefault();
    mainApi.signOut()
      .then(() => {
        console.log('LOGOUT')
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

  const handleEmptySearch = () => {
    openTooltip({
      success: false,
      message: 'Нужно ввести ключевое слово',
    })
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
          <Main loggedIn={loggedIn} />
        </Route>
        <ProtectedRoute
          path='/movies'
          loggedIn={loggedIn}
          movies={initialMovies}
          onSave={handleSaveMovie}
          onRemove={handleRemoveMovie}
          onEmptySearch={handleEmptySearch}
          component={Movies}
          />
        <ProtectedRoute
          path='/saved-movies'
          loggedIn={loggedIn}
          savedMovies={savedMovies}
          movies={savedMovies}
          onRemove={handleRemoveMovie}
          onEmptySearch={handleEmptySearch}
          component={Movies}
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
          {console.log(history)}
        </Route>
      </Switch>
      <InfoTooltip isOpen={isToooltipOpened} message={tooltipMessage} success={isSuccess} onClose={handleCloseTooltip} />
    </currentUserContext.Provider>
  );
}

export default withRouter(App);
