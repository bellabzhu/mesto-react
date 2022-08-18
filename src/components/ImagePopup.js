function ImagePopup (props) {

  // props: 
  // card
  // onClose
  
  function handleClick() {
    props.onCardClick(props.card);
  }  

  return(
    <div className={`popup popup_type_image-zoomed 
    ${props.isOpened
    ? 'popup_opened' 
    : ''
    } `}
    >
      <div className="popup__zoom-container popup__container-area">
      <button className="button button-close" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
      <figure className="popup__zoom-container">
        <img src="#" className="popup__image-zoomed" alt="alt" />
        <figcaption className="popup__zoom-caption"></figcaption>
      </figure>
      </div>
    </div>
  )
}

export default ImagePopup;