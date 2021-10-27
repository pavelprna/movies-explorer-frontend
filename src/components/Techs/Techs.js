import './Techs.css';

function Techs() {
  return (
    <section className='section techs'>
      <div className="section__container techs__container">
        <h2 className="section__title techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">MongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;