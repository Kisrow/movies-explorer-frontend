import { APPLIED_TECHNOLOGIES } from '../../utils/constnants';

function Techs() {
  const techs = APPLIED_TECHNOLOGIES.map((item, index) => 
    <li className="techs__list-item" key={index}>
      {item}
    </li>
  );

  return (
    <section className="techs">
      <h2 className="techs__title" id="techs__title">Технологии</h2>
      <h3 className="techs__text-title">{techs.length} технологий</h3>
      <div className="techs__text-container">
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <ul className="techs__list">
        { techs }
      </ul>
    </section>
  )
}

export default Techs;