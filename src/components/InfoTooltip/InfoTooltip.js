import './InfoTooltip.css';
import tooltipIconOk from "../../images/logo/tooltip-ok.svg";
import tooltipIconError from "../../images/logo/tooltip-error.svg";


const InfoTooltip = ({ message, success, isOpen, onClose }) => {
  return (
    <div className={`popup popup_content_tooltip ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_content_tooltip">
        <button
          onClick={onClose}
          className="popup__close button"
        />
        <img src={success ? tooltipIconOk : tooltipIconError} alt="Иконка состояния авторизации" className="popup__icon" />
        <p className="popup__message">{message}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;
