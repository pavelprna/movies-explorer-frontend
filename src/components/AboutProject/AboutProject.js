import './AboutProject.css';

function AboutProject() {
  return (
    <section className="section about-project">
      <div className="section__container about-project__container">
        <h2 className="section__title">О проекте</h2>
        <ul className="about-project__list">
          <li className="about-project__list-item">
            <h3 className="about-project__list-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__list-item">
            <h3 className="about-project__list-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="process">
          <p className="process__cell process__cell_color_green">1 неделя</p>
          <p className="process__cell process__cell_color_gray">4 недели</p>
          <p className="process__cell process__cell_color_white">Back-end</p>
          <p className="process__cell process__cell_color_white">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
