import { Link } from 'react-router-dom';
import PageWithForm from '../PageWithForm/PageWithForm';
import { useFormValidation } from '../../hooks/useFormValidation';
import { patterns } from '../../utils/constants';
import './Login.css';

function Login({ onSubmit }) {
  const { values, errors, isValid, handleChange } = useFormValidation({
    email: '', password: ''
  });
  const isButtonDisabled = values.email === '' || values.password === '' || !isValid;

  function handleSubmit(e) {
    e.preventDefault();
    !isButtonDisabled && onSubmit(values);
  }

  return (
    <PageWithForm
      title='Рады видеть!'
      submitButtonText='Войти'
      onSubmit={handleSubmit}
      isDisabled={isButtonDisabled}
      bottomText={<p className="page__text">Ещё не зарегистрированы? <Link className='page__link' to='/signup'>Регистрация</Link></p>}
      isButtonDisabled={isButtonDisabled}
    >
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

export default Login;