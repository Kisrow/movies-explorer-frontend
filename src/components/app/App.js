import Header from '../header/header';
import Main from '../main/Main';
import Movie from '../movies/Movies';
import SavedMovies from '../saved-movies/SavedMovies';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className='root'>
      <div className='app'>
        <Header />
        <Main />
        <Movie />
        <SavedMovies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
