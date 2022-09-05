import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup (props) {
  console.log(props)
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange (e) {
    setName(e.target.value)
  }

  function handleDescriptionChange (e) {
    setDescription(e.target.value)
  }

  return (
    <PopupWithForm
      title="Редактировать&nbsp;профиль"
      name="edit-name"
      isOpen={props.isOpen}
      buttonText="Сохранить">
        <input className="popup__input popup__input_value_name" onChange={handleNameChange} type="text" placeholder="Ваше имя" name="name" required minLength="2" maxLength="40" id="user-name" />
        <span className="popup__input-error popup__input-user-name-error"></span>
        <input className="popup__input popup__input_value_job" onChange={handleDescriptionChange} type="text" placeholder="Чем занимаетесь?" name="about" required maxLength="200" minLength="2" id="job" />
        <span className="popup__input-error popup__input-job-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;