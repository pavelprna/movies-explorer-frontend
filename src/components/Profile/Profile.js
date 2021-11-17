import { useContext, useEffect, useState } from 'react';
import { currentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ onSubmit, onLogout, loggedIn}) {
  const currentUser = useContext(currentUserContext);
  const [values, setValues] = useState({ name: '', email: '' });

  useEffect(() => {
    setValues({ name: currentUser.name || '', email: currentUser.email || '' })
  }, [currentUser])

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values)
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form">
          <label htmlFor="" className="profile__label">
            Имя
            <input type="text" name='name' className="profile__input" value={values.name} onChange={handleChange} />
          </label>
          <label htmlFor="" className="profile__label">
            E-mail
            <input type="email" name='email' className="profile__input" value={values.email} onChange={handleChange} />
          </label>
          <button type="submit" className="profile__link" onClick={handleSubmit}>Редактировать</button>
          <button onClick={onLogout} className="profile__link profile__link_type_logout">Выйти из аккаунта</button>
        </form>
      </section>
    </>
  )
}

export default Profile;
