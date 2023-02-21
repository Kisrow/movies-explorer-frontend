import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import Header from '../header/header';
import Main from '../main/Main';
import Movie from '../movies/Movies';
import SavedMovies from '../saved-movies/SavedMovies';
import Profile from '../profile/Profile';
import Register from '../register/Register';
import Login from '../login/login';
import Footer from '../footer/Footer';
import Mobile from '../mobile/mobile';
import PageNotFound from '../page-not-found/PageNotFound';

import { LocationContext } from '../../context/LocationContext';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import { moviesApi } from '../../utils/MoviesApi';
import { savedMoviesApi } from '../../utils/MainApi';


function App() {
  const location = useLocation();
  const history = useHistory();

  // стейт, залогинен ли пользователь
  const [logedIn, setLogedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // стейт, фильмы
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [renderMovies, setRenderMovies] = useState([]);
  // стейт, состояние мобильного меню
  const [isMobileMenuActive, setMobileActive] = useState(false);
  // стейт, сосотояние чекбокса
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    getAllSavedMovies();
    getInfoCurrentUser();
    getAllMovies();
  }, []);

  // регистрирует аккаунт
  function register(name, email, password) {
    savedMoviesApi.register(name, email, password)
      .then((data) => {
        if (data) {
          history.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // авторизуется на сайте
  function login(email, password) {
    savedMoviesApi.login(email, password)
      .then((data) => {
        if (data) {
          setLogedIn(true);
          history.push('/movies');
          getAllSavedMovies();
          getInfoCurrentUser();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function getAllSavedMovies() {
    savedMoviesApi.getAllSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch((err) => console.log(err))
  };

  // получить все фильмы с чужого сервера
  function getAllMovies() {
    moviesApi.getAllMovies()
      .then(moviesFromAdditionalServer => {
        setMovies(moviesFromAdditionalServer);
      })
      .catch((err) => console.log(err))
  };

  function getInfoCurrentUser() {
    savedMoviesApi.getUserInfo()
      .then((date) => {
        if (date) {
          setLogedIn(true);
          setCurrentUser(date);
        } else {
          setLogedIn(false);
        }
      })
      .catch((err) => console.log(err))
  };

  function updateUserDate(name, email) {
    savedMoviesApi.updateUserDate(name, email)
      .then((date) => {
        setCurrentUser(date);
      })
      .catch((err) => console.log(err))
  };

  // открыть мобильное меню
  function handleMobileMenyIconClick() {
    setMobileActive(true);
  };
  // закрыть мобильное меню
  function closeMobileMenu() {
    setMobileActive(false);
  };

  // сортировать входящий массив фильм по состоянию чекбокса
  function filterByCheckbox(arrayOfMovies) {
    if (isChecked) {
      return arrayOfMovies.filter((i) => i.duration <= 90);
    } else {
      return arrayOfMovies;
    }
  }
  // сортировать входящий массив фильма по имени фильма (только рус)
  function filterByMovieName(arrayOfMovies, filmName) {
    return arrayOfMovies.filter((i) => {
      return i.nameRU.includes(filmName);
    });
  }

  // найти все фильмы с учетом чекбокса(продолжительности)
  function searchCardToRender(filmName) {
    setRenderMovies(filterByMovieName(filterByCheckbox(movies), filmName));
  }

  function logOut() {
    savedMoviesApi.logOut()
      .then((res) => {
        setLogedIn(false);
        console.log(res.message)
        history.push('/');
      })
  }
  return (
    <LocationContext.Provider value={location}>
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      <div className="app">
        <header>
          <Header 
            handleMobileMenyIconClick = {handleMobileMenyIconClick}
            logedIn = {logedIn}
          />
        </header>
        <main>
          <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/movies">
                <Movie
                  movies = {movies}
                  setChecked = {setChecked}
                  searchCardToRender = {searchCardToRender}
                  renderMovies = {renderMovies}
                />
              </Route>
              <Route path="/saved-movies">
                <SavedMovies 
                  savedMovies = {savedMovies}
                />
              </Route>
              <Route path="/profile">
                <Profile 
                  logOut = {logOut}
                  updateUserDate = {updateUserDate}
                />
              </Route>
              <Route path="/register">
                <Register 
                  register = {register}
                />
              </Route>
              <Route path="/login">
                <Login 
                  login = {login}
                />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
          </Switch>
        <Mobile 
          closeMobileMenu = {closeMobileMenu}
          isMobileMenuActive = {isMobileMenuActive}
          logedIn = {logedIn}
        />
        </main>
        <footer>
          <Footer 
            logedIn = {logedIn}
          />
        </footer>
      </div>
    </div>
    </CurrentUserContext.Provider>
    </LocationContext.Provider>
  );
}

export default App;
