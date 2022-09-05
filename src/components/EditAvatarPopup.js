import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup (props) {

  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // props.onUpdateAvatar({
    //   avatar: /* Значение инпута, полученное с помощью рефа */,
    // });
  } 

  return (
      <PopupWithForm
        title="Обновить&nbsp;аватар"
        name="edit-avatar"
        isOpen={props.isOpen}
        onClose={props.onClose}
        buttonText="Сохранить">
          <input className="popup__input popup__input_value_avatarlink" type="url" id="avatarlink" placeholder="Ссылка на картинку" name="avatar" required />
          <span className="popup__input-error popup__input-avatarlink-error"></span>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;