import { Link } from 'react-router-dom';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css';

function Register() {
  return (
    <PageWithForm
      title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      bottomText={<p className="page__text">Уже зарегистрированы? <Link className='page__link' to='/signin'>Войти</Link></p>}
    >
      <label className="form__label">
        Имя
        <input type="text" className="form__input" />
      </label>
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

export default Register;