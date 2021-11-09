import './PageWithForm.css';
import logo from '../../images/logo/logo.svg'
import { useHistory } from 'react-router';

function PageWithForm({ children, title, submitButtonText, bottomText }) {
  const history = useHistory();

  return (
    <section className="section page">
      <img src={logo} alt="" className="page__logo" />
      <h1 className="page__title">{title}</h1>
      <form action="" className="form">
        {children}
        <button onClick={() => history.push('/movies')} className="form__submit">{submitButtonText}</button>
      </form>
      {bottomText}
    </section>
  )
}

export default PageWithForm;