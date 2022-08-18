import React from "react";

function PopupWithForm (props) {

  return (
    <div className={`popup popup_type_${props.name} 
    ${props.isOpened
    ? 'popup_opened' 
    : ''
    } `}
    >
      <div className="popup__container popup__container-area">
        <button className="button button-close" onClick={props.onClose} type="button" aria-label="Закрыть"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_type_${props.name}`} name={`form_${props.name}`} noValidate>
          {props.children}
          <button type="submit" className="button button-submit" value={props.buttonText}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;