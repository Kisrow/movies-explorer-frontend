import { Route, Routes } from 'react-router-dom';

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

function App() {
  return (
    <div className="root">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element = {
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
        <Mobile />
        <Footer />
      </div>
    </div>
  );
}

export default App;
