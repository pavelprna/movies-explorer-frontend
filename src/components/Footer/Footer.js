import './Footer.css';

function Footer() {
  return (
    <footer className="footer section">
      <div className="section__container footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
          <li className="footer__list-item">
            <a href="https://github.com/pavelprna" className="footer__link" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__list-item">
            <a href="https://t.me/pprna" className="footer__link" target="_blank" rel="noreferrer">Telegram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
