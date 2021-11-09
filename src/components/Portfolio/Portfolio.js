import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a href="https://github.com/pavelprna/how-to-learn" target="_blank" className="portfolio__link" rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a href="https://github.com/pavelprna/russian-travel" target="_blank" className="portfolio__link" rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a href="https://github.com/pavelprna/react-mesto-api-full" target="_blank" className="portfolio__link" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;
