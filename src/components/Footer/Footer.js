import './Footer.css';

function Footer() {
  return (
    <footer className="footer section">
      <div className="section__container footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="" className="footer__link" target="_blank">Яндекс.Практикум</a>
            </li>
          <li className="footer__list-item">
            <a href="" className="footer__link" target="_blank">Github</a>
          </li>
          <li className="footer__list-item">
            <a href="" className="footer__link" target="_blank">Telegram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
