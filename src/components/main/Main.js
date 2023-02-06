import Promo from '../promo/Promo';
import AboutProject from '../about-project/AboutProject';
import Techs from '../techs/Techs';
import AboutMe from '../about-me/AboutMe';

function Main() {
  return (
    <div className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
}

export default Main;
