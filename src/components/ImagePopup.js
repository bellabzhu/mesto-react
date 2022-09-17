import React from "react";

function ImagePopup (props) {

  function closeByOverlay (e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }

  return(
    <div 
      className={`popup popup_type_image-zoomed ${props.isOpen ? 'popup_opened' : ''} `}
      onClick={closeByOverlay}
    >
      <div className="popup__zoom-container popup__container-area">
      <button className="button button-close" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
      <figure className="popup__zoom-container">
        <img src={props.card?.link} className="popup__image-zoomed" alt={props.card ? props.card.name : ''} />
        <figcaption className="popup__zoom-caption">{props.card ? props.card.name : ''}</figcaption>
      </figure>
      </div>
    </div>
  )
}

export default ImagePopup;