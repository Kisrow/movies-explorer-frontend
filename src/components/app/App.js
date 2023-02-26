import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';

import Header from '../header/header';
import Main from '../main/Main';
import Movies from '../movies/Movies';
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
import ProtectedRoute from '../../utils/ProtectedRoute';


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
  const [renderSavedMovies, setRenderSavedMovies] = useState([]);
  // стейт, состояние мобильного меню
  const [isMobileMenuActive, setMobileActive] = useState(false);
  // стейт, состояние чекбокса
  const [isChecked, setChecked] = useState(false);
  const [isShortChecked, setShortChecked] = useState(false);
  const [searchMovieName, setSearchMovieName] = useState('');
  const [searchSavedMovieName, setSearchSavedMovieName] = useState('');
  // текс ошибки при регистрации/логировании
  const [registerErrorText, setRegisterErrorText] = useState('');
  const [loginErrorText, setLoginErrorText] = useState('');
  const [profileErrorText, setProfileErrorText] = useState('');
  // при запросах
  const [isErrorGetMovies, setErrorGetMovies] = useState(false);
  const [isErrorGetSavedMovies, setErrorGetSavedMovies] = useState(false);
  const [isErrorUpdateUserDate, setErrorUpdateUserDate] = useState(false);
  const [isSuccessUpdateUserDate, setSuccessUpdateUserDate] = useState(false);
  const [isErrorSearchForm, setErrorSearchForm] = useState(false);
  // прелоадер
  const [isActivePreloader, setActivePreloader] = useState(false);
  const [isNoneSearch, setNoneSearch] = useState(true);

  useEffect(() => {
    setNoneSearch(true);
    setActivePreloader(true);
    getAllSavedMovies();
    getInfoCurrentUser();
    setChecked(sessionStorage.getItem('checkbox') === 'true' ? true : false);
    moviesApi.getAllMovies()
      .then((moviesFromAdditionalServer) => {
        setErrorGetMovies(false);
        setMovies(moviesFromAdditionalServer);
        if (sessionStorage.getItem("lastSearchMovieName")) {
          setSearchMovieName(sessionStorage.getItem("lastSearchMovieName"));
          setRenderMovies(filterByMovieName(filterByCheckbox(moviesFromAdditionalServer, sessionStorage.getItem('checkbox') === 'true' ? true : false), sessionStorage.getItem("lastSearchMovieName").toLowerCase()));
          setNoneSearch(false);
          }
        })
        .then(()=> {
          history.push(location.pathname);
      })
      .catch((err) => {
        setErrorGetMovies(true);
      })
      .finally(() => setActivePreloader(false))
  }, [])

  // регистрирует аккаунт
  function register(name, email, password) {
    savedMoviesApi.register(name, email, password)
      .then((data) => {
        if (data) {
          login(email, password);
        }
      })
      .catch((err) => {
        setRegisterErrorText(err.message);
      });
  };

  // авторизуется на сайте
  function login(email, password) {
    savedMoviesApi.login(email, password)
      .then((data) => {
        if (data) {
          setLogedIn(true);
          history.push('/movies');
          setActivePreloader(true);
          getAllSavedMovies();
          getInfoCurrentUser();
        }
      })
      .catch((err) => {
        setLoginErrorText(err.message);
        setLogedIn(false);
      })
      .finally(() => setActivePreloader(false));
  };

  // получить все сохраненные фильмы
  function getAllSavedMovies() {
    savedMoviesApi.getAllSavedMovies()
      .then((savedMovies) => {
        setErrorGetSavedMovies(false)
        setSavedMovies(savedMovies);
        setRenderSavedMovies(savedMovies);
      })
      .catch((err) => {
        setErrorGetSavedMovies(true);
      })
  };

  // сохранить фильм
  function saveMovie(movie) {
    savedMoviesApi.saveMovie(movie)
      .then((movie) => {
        let newSavedMovies = savedMovies.slice();
        newSavedMovies.push(movie);
        setSavedMovies(newSavedMovies);
        setRenderSavedMovies(newSavedMovies);
      })
      .catch((err) => console.log(err))
  };

  // удалить фильм
  function deleteMovie(idMovie) {
    savedMoviesApi.deleteMovie(idMovie)
      .then(()=> {
        setSavedMovies(savedMovies.filter(item => item._id !== idMovie));
        setRenderSavedMovies(renderSavedMovies.filter(item => item._id !== idMovie));
      })
      .catch((err) => console.log(err))
  }

  // получить информацию о пользователе
  function getInfoCurrentUser() {
    savedMoviesApi.getUserInfo()
      .then((date) => {
          setLogedIn(true);
          setCurrentUser(date);
        })
      .catch((err) => setLogedIn(false))
  };

  // обновить информацию пользователя
  function updateUserDate(name, email) {
    savedMoviesApi.updateUserDate(name, email)
      .then((date) => {
        setErrorUpdateUserDate(false);
        setSuccessUpdateUserDate(true);
        setCurrentUser(date);
      })
      .catch((err) => {
        setProfileErrorText(err.message);
        setErrorUpdateUserDate(true);
        setSuccessUpdateUserDate(false);
      })
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
  function filterByCheckbox(arrayOfMovies, checkState) {
    if (checkState) {
      return arrayOfMovies.filter((i) => i.duration <= 40);
    } else {
      return arrayOfMovies;
    }
  }
  // сортировать входящий массив фильма по имени фильма (только рус)
  function filterByMovieName(arrayOfMovies, filmName) {
    return arrayOfMovies.filter((i) => {
      return i.nameRU.toLowerCase().includes(filmName);
    });
  }

  // найти все фильмы с учетом чекбокса(продолжительности)
  function searchCardToRender() {
    if (location.pathname === "/movies") {
      if (searchMovieName.length > 0) {
        setErrorSearchForm(false);
        setRenderMovies(filterByMovieName(filterByCheckbox(movies, isChecked), searchMovieName.toLowerCase()));
        sessionStorage.setItem('lastSearchMovieName', searchMovieName);
        setNoneSearch(false);
      } else {
        setErrorSearchForm(true);
      }
    } else {
      setRenderSavedMovies(filterByMovieName(filterByCheckbox(savedMovies, isShortChecked), searchSavedMovieName.toLowerCase()));
    }
  }

  // выйти из аккаунта
  function logOut() {
    savedMoviesApi.logOut()
      .then((res) => {
        setLogedIn(false);
        sessionStorage.clear();
        setRenderMovies([]);
        setErrorGetMovies(false);
        setActivePreloader(false);
        setNoneSearch(true);
        setSearchMovieName('');
        setChecked(false);
        history.push('/');
      })
      .catch((err) => console.log(err));
  };
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
              <Route path="/register">
              {!logedIn ?
                <Register 
                  register = {register}
                  registerErrorText = {registerErrorText}
                  setRegisterErrorText = {setRegisterErrorText}
                /> : <Redirect to="/"
              />}
              </Route>
              <Route path="/login">
              {!logedIn ?
                <Login 
                  login = {login}
                  loginErrorText = {loginErrorText}
                  setLoginErrorText = {setLoginErrorText}
                /> : <Redirect to="/"
              />}
              </Route>
              <ProtectedRoute
                path="/movies"
                component={Movies}
                logedIn = {logedIn}
                renderMovies = {renderMovies} // массив карточек, который будет отрисовываться
                savedMovies = {renderSavedMovies} // массив сохраненных карточек
                setChecked = {setChecked} // изменить состояние чекбокса на странице /movies
                isChecked = {isChecked} // состояние чекбокса на странице /movies
                searchCardToRender = {searchCardToRender} // функция, которая возвращает массив из изначального с учетом фильтров
                setSearchMovieName = {setSearchMovieName}
                searchMovieName = {searchMovieName}
                saveMovie = {saveMovie}
                deleteMovie = {deleteMovie}
                isErrorGetMovies = {isErrorGetMovies}
                isErrorSearchForm = {isErrorSearchForm}
                isActivePreloader = {isActivePreloader}
                isNoneSearch = {isNoneSearch}
              />
              <ProtectedRoute
                path="/saved-movies"
                component={SavedMovies}
                logedIn = {logedIn}
                renderSavedMovies = {renderSavedMovies}
                savedMovies = {savedMovies}
                deleteMovie = {deleteMovie}
                searchCardToRender = {searchCardToRender}
                setShortChecked = {setShortChecked}
                isShortChecked = {isShortChecked}
                setSearchSavedMovieName = {setSearchSavedMovieName}
                searchSavedMovieName = {searchSavedMovieName}
                isErrorGetSavedMovies = {isErrorGetSavedMovies}
              />
              <ProtectedRoute
                path="/profile"
                component={Profile}
                logedIn = {logedIn}
                logOut = {logOut}
                updateUserDate = {updateUserDate}
                profileErrorText = {profileErrorText}
                setProfileErrorText = {setProfileErrorText}
                isErrorUpdateUserDate = {isErrorUpdateUserDate}
                isSuccessUpdateUserDate = {isSuccessUpdateUserDate}
                setErrorUpdateUserDate = {setErrorUpdateUserDate}
                setSuccessUpdateUserDate = {setSuccessUpdateUserDate}
              />
              <Route path="/not-found">
                <PageNotFound />
              </Route>
              <Route path="*">
                {logedIn ? <Redirect to="not-found" /> : <Redirect to="/" />}
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
