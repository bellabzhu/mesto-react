import PopupWithForm from './PopupWithForm';

function ConfirmationPopup (props) {

  function handleSubmit (e) {
    e.preventDefault();
    props.onCardDelete(props.selectedCard)
  }

  return (
    <PopupWithForm
      title="Вы&nbsp;уверены?"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      loadingButtonText='Удаление...'
      name="confirm"
      buttonText="Да"
    />
  )
}

export default ConfirmationPopup;