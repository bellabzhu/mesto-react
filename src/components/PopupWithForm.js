function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  buttonText,
  children,
}) {

  function handleSumbitForm () {
    console.log('submit')
  }

  return (
    <div
      className={`popup 
    popup_type_${name} ${isOpen ? "popup_opened" : ""} `}
    >
      <div className="popup__container popup__container-area">
        <button
          className="button button-close"
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={`form_${name}`}
        >
          {children}
          <button
            type="submit"
            className="button button-submit"
            value={buttonText}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
