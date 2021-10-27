import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a href="http" target="_blank" className="portfolio__link">Статичный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a href="#" target="_blank" className="portfolio__link">Адаптивный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a href="#" target="_blank" className="portfolio__link">Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;
