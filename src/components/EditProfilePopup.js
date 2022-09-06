import { useEffect, useContext, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup (props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleNameChange (e) {
    setName(e.target.value)
  }

  function handleDescriptionChange (e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать&nbsp;профиль"
      name="edit-name"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      onClose={props.onClose}
      buttonText="Сохранить">
        <input className="popup__input popup__input_value_name" onChange={handleNameChange} type="text" placeholder="Ваше имя" name="name" required minLength="2" maxLength="40" id="user-name" value={name} />
        <span className="popup__input-error popup__input-user-name-error"></span>
        <input className="popup__input popup__input_value_job" onChange={handleDescriptionChange} type="text" placeholder="Чем занимаетесь?" name="about" required maxLength="200" minLength="2" id="job" value={description} />
        <span className="popup__input-error popup__input-job-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;