import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css';

function Register({ onSubmit }) {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <PageWithForm
      title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      onSubmit={handleSubmit}
      bottomText={<p className="page__text">Уже зарегистрированы? <Link className='page__link' to='/signin'>Войти</Link></p>}
    >
      <label className="form__label">
        Имя
        <input type="text" name='name' className="form__input" defaultValue="Виталий" onChange={handleChange} />
      </label>
      <label className="form__label">
        E-mail
        <input type="email" name='email' className="form__input" defaultValue="pochta@yandex.ru" onChange={handleChange} />
      </label>
      <label className="form__label">
        Пароль
        <input type="password" name='password' className="form__input form__input_invalid" defaultValue="invalid-password" onChange={handleChange} />
        <p className="form__error-message">Что-то пошло не так...</p>
      </label>
    </PageWithForm>
  )
}

export default Register;