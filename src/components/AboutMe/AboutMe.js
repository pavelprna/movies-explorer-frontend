import photo from '../../images/about-me-photo.jpeg';
import './AboutMe.css';

function AboutMe(props) {
  return (
    <section id="#about-me" className="section about-me">
      <div className="section__container">
      <h2 className="section__title about-me__title">Студент</h2>
      <article className="about-me__card card">
        <div className="card__content">
          <h3 className="card__title">Павел</h3>
          <p className="card__subtitle">Фронтенд-разработчик, 34 года</p>
          <p className="card__text">Я родился и живу в Новосибирске, учился на факультете физики НГПУ. Люблю слушать музыку. Начал кодить еще в школе, но всегда относился к этому как к хобби. 
С начала 2021 года решил полностью посвятить себя любимому делу. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="card__social-list">
            <li className="card__social-item">
              <a href="https://github.com/pavelprna" target="_blank" rel="noreferrer" className="card__social-link">GitHub</a>
            </li>
            <li className="card__social-item">
              <a href="https://t.me/pprna" target="_blank" rel="noreferrer" className="card__social-link">Telegram</a>
            </li>
          </ul>
        </div>
        <img src={photo} alt="Павел, фронтенд-разработчик" className="card__image" />
      </article>
      {props.children}
      </div>
    </section>
  )
}

export default AboutMe;
