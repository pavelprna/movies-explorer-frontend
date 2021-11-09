import { Link } from 'react-router-dom';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Login.css';

function Login() {
  return (
    <PageWithForm
      title='Рады видеть!'
      submitButtonText='Войти'
      bottomText={<p className="page__text">Ещё не зарегистрированы? <Link className='page__link' to='/signup'>Регистрация</Link></p>}
    >
      <label className="form__label">
        E-mail
        <input type="email" className="form__input" />
      </label>
      <label className="form__label">
        Пароль
        <input type="password" className="form__input" />
      </label>
    </PageWithForm>
  )
}

export default Login;