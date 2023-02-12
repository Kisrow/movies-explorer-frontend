import { } from '../../utils/constnants'

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title"><article id="about-project__title">О проекте</article></h2>
      <div className="about-project__grid-container">
        <h3 className="about-project__grid-title">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__grid-title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__grid-text">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
        <p className="about-project__grid-text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline">
        <p className="about-project__timeline-text about-project__timeline-text_type_green">1 неделя</p>
        <p className="about-project__timeline-text">4 недели</p>
        <p className="about-project__timeline-description">Back-end</p>
        <p className="about-project__timeline-description">Front-end</p>
      </div>
    </div>
  )
}

export default AboutProject;