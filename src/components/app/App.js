import { useState } from 'react';
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


function App() {
  const location = useLocation();

  // стейт, состояние мобильного меню
  const [isMobileMenuActive, setMobileActive] = useState(false)

  //функция, открыть мобильное меню
  function handleMobileMenyIconClick() {
    setMobileActive(true);
  }

  //функция, закрыть мобильное меню
  function closeMobileMenu() {
    setMobileActive(false)
  }

  const auth = false; //! костыль для авторизации, нужен для адекватного отображения верстки, после будет удален

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
                <Movie />
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
