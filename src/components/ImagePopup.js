import React from "react";

function ImagePopup (props) {

  return(
    <div 
      className={`popup popup_type_image-zoomed 
    ${props.isOpened ? 'popup_opened' : ''} `}
    >
      <div className="popup__zoom-container popup__container-area">
      <button className="button button-close" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
      <figure className="popup__zoom-container">
        <img src={props.card ? props.card.link : '#'} className="popup__image-zoomed" alt={props.card ? props.card.name : ''} />
        <figcaption className="popup__zoom-caption">{props.card ? props.card.name : ''}</figcaption>
      </figure>
      </div>
    </div>
  )
}

export default ImagePopup;