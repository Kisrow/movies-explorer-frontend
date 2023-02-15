import { useContext} from 'react';

import { LocationContext } from '../../context/LocationContext';
import MoviesCard from '../movies-card/MoviesCard';

function MoviesCardList() {
  const location = useContext(LocationContext);
  return (
    <>
      <div className="movies-card-list">
        <MoviesCard
          name="test"
          duration="55"
          link="https://v.ftcdn.net/01/65/12/18/700_F_165121865_6IGtprcF0DnjX7h6P5m2KFrL6ab5AFo6_ST.mp4"
          poster="https://avatarko.ru/img/avatarka/100na100/glaza_ognennie_resnici.gif"
        />
        <MoviesCard
          name="test"
          duration="55"
          link="https://v.ftcdn.net/01/65/12/18/700_F_165121865_6IGtprcF0DnjX7h6P5m2KFrL6ab5AFo6_ST.mp4"
          poster="https://avatarko.ru/img/avatarka/100na100/glaza_ognennie_resnici.gif"
        />
        <MoviesCard
          name="test"
          duration="55"
          link="https://v.ftcdn.net/01/65/12/18/700_F_165121865_6IGtprcF0DnjX7h6P5m2KFrL6ab5AFo6_ST.mp4"
          poster="https://avatarko.ru/img/avatarka/100na100/glaza_ognennie_resnici.gif"
        />
        <MoviesCard
          name="test"
          duration="55"
          link="https://v.ftcdn.net/01/65/12/18/700_F_165121865_6IGtprcF0DnjX7h6P5m2KFrL6ab5AFo6_ST.mp4"
          poster="https://avatarko.ru/img/avatarka/100na100/glaza_ognennie_resnici.gif"
        />
        <MoviesCard
          name="test"
          duration="55"
          link="https://v.ftcdn.net/01/65/12/18/700_F_165121865_6IGtprcF0DnjX7h6P5m2KFrL6ab5AFo6_ST.mp4"
          poster="https://avatarko.ru/img/avatarka/100na100/glaza_ognennie_resnici.gif"
        />
      </div>
      <button className={`movies-card-list__next-movies ${location.pathname === "/saved-movies" ? "movies-card-list__next-movies_type_saved-movies" : ""}`}>Ещё</button>
    </>
  );
}

export default MoviesCardList;