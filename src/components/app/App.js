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

import { moviesApi } from '../../utils/MoviesApi';
import { savedMoviesApi } from '../../utils/MainApi';


function App() {
  const location = useLocation();
  const history = useHistory();

  // стейт, залогинен ли пользователь
  const [logedIn, setLogedIn] = useState(false);
 
  // стейт, фильмы с сервера
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [renderMovies, setRenderMovies] = useState([]);

  // стейт, состояние мобильного меню
  const [isMobileMenuActive, setMobileActive] = useState(false);

  // стейт, сосотояние чекбокса
  const [isChecked, setChecked] = useState(false);

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

  function login(email, password) {
    savedMoviesApi.login(email, password)
      .then((data) => {
        if (data) {
          setLogedIn(true);
          history.push('/');
          getAllSavedMovies();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

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
        setMovies(moviesFromAdditionalServer)
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
    setRenderMovies(filterByMovieName(filterByCheckbox(movies), filmName)); //! инпут из serchForm сюда
  }

  return (
    <LocationContext.Provider value={location}>
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
                <Profile />
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
    </LocationContext.Provider>
  );
}

export default App;
