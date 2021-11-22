import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  return (
    <section className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__message">Страница не найдена</p>
      </div>
      <nav className="not-found__nav">
        <button onClick={() => history.go(-2)} className="not-found__link">Назад</button>
      </nav>
    </section>
  )
}

export default NotFound;
