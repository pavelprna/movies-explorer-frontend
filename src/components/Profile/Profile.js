import { useContext } from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';
import { currentUserContext } from '../../contexts/CurrentUserContext';
import { patterns } from '../../utils/constants';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ onSubmit, onLogout, loggedIn }) {
  const currentUser = useContext(currentUserContext);
  const { values, errors, isValid, handleChange } = useFormValidation({
    name: currentUser.name,
    email: currentUser.email
  });
  const isButtonDisabled = currentUser.name === values.name || values.name === '' || values.email === '' || !isValid;

  function handleSubmit(e) {
    e.preventDefault();
    !isButtonDisabled && onSubmit(values);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form">
          <label htmlFor="" className="profile__label">
            Имя
            <input type="text"
              name='name'
              className="profile__input"
              value={values.name}
              onChange={handleChange}
              pattern={patterns.name}
              required />
          </label>
          <label htmlFor="" className="profile__label">
            E-mail
            <input type="email"
              name='email'
              className="profile__input"
              value={values.email}
              onChange={handleChange}
              pattern={patterns.email}
              required />
          </label>
          {errors.name ? <span className="profile__error-message">Ошибка имени: {errors.name}</span> : ''}
          {errors.email ? <span className="profile__error-message">Ошибка email: {errors.email}</span> : ''}
          <button onClick={handleSubmit} className={`profile__link ${isButtonDisabled ? 'profile__link_disabled' : ''}`}>Редактировать</button>
          <button onClick={onLogout} className="profile__link profile__link_type_logout">Выйти из аккаунта</button>
        </form>
      </section>
    </>
  )
}

export default Profile;
