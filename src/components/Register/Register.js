import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation'
import PageWithForm from '../PageWithForm/PageWithForm';
import { patterns } from '../../utils/constants'
import './Register.css';

function Register({ onSubmit }) {
  const { values, errors, isValid, handleChange } = useFormValidation({
    email: '', password: ''
  });
  const isButtonDisabled = values.email === '' || values.password === '' || values.name === '' || !isValid;

  function handleSubmit(e) {
    e.preventDefault();
    !isButtonDisabled && onSubmit(values);
  }

  return (
    <PageWithForm
      title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      isDisabled={isButtonDisabled}
      onSubmit={handleSubmit}
      bottomText={<p className="page__text">Уже зарегистрированы? <Link className='page__link' to='/signin'>Войти</Link></p>}
    >
      <label className="form__label">
        Имя
        <input
          type="text"
          name="name"
          value={values.name || ''}
          minLength={2}
          className={`form__input ${errors.name ? 'form__input_type-error' : ''}`}
          onChange={handleChange}
          required />
        {errors.name ? <span className="form__error-message">{errors.name}</span> : ''}
      </label>
      <label className="form__label">
        E-mail
        <input
          type="email"
          name="email"
          value={values.email || ''}
          className={`form__input ${errors.email ? 'form__input_type-error' : ''}`}
          onChange={handleChange}
          pattern={patterns.email}
          required />
        {errors.email ? <span className="form__error-message">{errors.email}</span> : ''}
      </label>
      <label className="form__label">
        Пароль
        <input type="password"
          name="password"
          minLength={6}
          onChange={handleChange}
          className={`form__input ${errors.password ? 'form__input_type-error' : ''}`}
          pattern={patterns.password}
          required />
        {errors.password ? <span className="form__error-message">{errors.password}</span> : ''}
      </label>
    </PageWithForm>
  )
}

export default Register;