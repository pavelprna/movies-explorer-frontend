import './PageWithForm.css';
import logo from '../../images/logo/logo.svg';

function PageWithForm({ children, title, submitButtonText, bottomText, onSubmit }) {

  return (
    <section className="section page">
      <img src={logo} alt="Логотип" className="page__logo" />
      <h1 className="page__title">{title}</h1>
      <form action="" className="form">
        {children}
        <button onClick={onSubmit} className="form__submit">{submitButtonText}</button>
      </form>
      {bottomText}
    </section>
  )
}

export default PageWithForm;