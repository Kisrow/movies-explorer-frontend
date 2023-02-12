import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

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

  const auth = true; //! костыль для авторизации, нужен для адекватного отображения верстки, после будет удален

  return (
    <LocationContext.Provider value={location}>
    <div className="root">
      <div className="app">
        <Header 
          handleMobileMenyIconClick = {handleMobileMenyIconClick}
          auth = {auth}
        />
        <Routes>
          <Route exact path="/" element = {
            <Main />
          } />
          <Route path="/movies" element = {
            <Movie />
          } />
          <Route path="/saved-movies" element = {
            <SavedMovies />
          } />
          <Route path="/profile" element = {
            <Profile />
          } />
          <Route path="/register" element = {
            <Register />
          } />
          <Route path="/login" element = {
            <Login />
          } />
          <Route path="*" element = {
            <PageNotFound />
          } />
        </Routes>
        <Mobile 
          closeMobileMenu = {closeMobileMenu}
          isMobileMenuActive = {isMobileMenuActive}
          auth = {auth}
        />
        <Footer 
          auth = {auth}
        />
      </div>
    </div>
    </LocationContext.Provider>
  );
}

export default App;
