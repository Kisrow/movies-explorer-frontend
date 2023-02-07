import Portfolio from '../portfolio/Portfolio'
import photo from '../../images/photo.png';
import test from '../../images/test.png';
 
function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title" id="about-me__title">Студент</h2>
      <div >
        <div className="about-me__content-container">
          <div className="about-me__content-text">
            <h3 className="about-me__content-name">Виталий</h3>
            <p className="about-me__content-job">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__content-description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и 
              дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года 
              работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься 
              фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href="https://github.com/Kisrow" target="_ blank" className="about-me__content-link">Github</a>
          </div>
          {/* <img src={photo} alt="Мое фото" className="about-me__content-image"/> */}
          {/* <img src={test} alt="Мое фото" className="about-me__content-image"/> */}
        </div>
      </div>
      <Portfolio />
    </div>
  )
}

export default AboutMe;