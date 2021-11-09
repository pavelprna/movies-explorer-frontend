import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label htmlFor="" className="profile__label">
            Имя
            <input type="text" className="profile__input" defaultValue="Виталий Витальевич Виталенко-Виталюк" />
          </label>
          <label htmlFor="" className="profile__label">
            E-mail
            <input type="email" className="profile__input" defaultValue="vitaly_antrekot_v_klyare@glavpochtamp.example" />
          </label>
          <button type="submit" className="profile__link">Редактировать</button>
          <Link to='/' className="profile__link profile__link_type_logout">Выйти из аккаунта</Link>
        </form>
      </section>
    </>
  )
}

export default Profile;
