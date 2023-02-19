import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

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


function App() {
  const location = useLocation();
 
  // стейт, фильмы с сервера
  const [movies, setMovies] = useState([]);
  const [renderMovies, setRenderMovies] = useState([]);

  // стейт, состояние мобильного меню
  const [isMobileMenuActive, setMobileActive] = useState(false);

  // стейт, сосотояние чекбокса
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    getAllMovies();
  }, []);

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

  const auth = true; //! костыль для авторизации, нужен для адекватного отображения верстки, после будет удален

  return (
    <LocationContext.Provider value={location}>
    <div className="root">
      <div className="app">
        <header>
          <Header 
            handleMobileMenyIconClick = {handleMobileMenyIconClick}
            auth = {auth}
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
                <SavedMovies />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
          </Switch>
        <Mobile 
          closeMobileMenu = {closeMobileMenu}
          isMobileMenuActive = {isMobileMenuActive}
          auth = {auth}
        />
        </main>
        <footer>
          <Footer 
            auth = {auth}
          />
        </footer>
      </div>
    </div>
    </LocationContext.Provider>
  );
}

export default App;
