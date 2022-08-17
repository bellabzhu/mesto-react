import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {

  // const [isEditProfilePopupOpen, setOpenProfilePopup] = React.useState(false)
  // const [isAddPlacePopupOpen, setOpenPlacePopup] = React.useState(false)
  // const [isEditAvatarPopupOpen, setOpenAvatarPopup] = React.useState(false)
  const isEditProfilePopupOpen = true
  // const isAddPlacePopupOpen = false
  // const isEditAvatarPopupOpen = false


  function handleEditProfileClick () {
    //setOpenProfilePopup(true)
    console.log('you clicked on Profile!')
    // document.querySelector('.popup_type_edit-name').classList.add('popup_opened');
  }

  function handleEditAvatarClick () {
    // document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
    console.log('you clicked on Avatar!')
  }

  function handleAddPlaceClick () {
    //setOpenPlacePopup(true)
    console.log('you clicked on Add Card!')
    // document.querySelector('.popup_type_add-card').classList.add('popup_opened');
  }

  return (
    <div className="page-container">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        />
      <Footer />

      {isEditProfilePopupOpen && <PopupWithForm
        title="Редактировать&nbsp;профиль"
        name="edit-name"
        isOpened={false}
        buttonText="Сохранить">
        <input className="popup__input popup__input_value_name" type="text" placeholder="Ваше имя" name="name" required minLength="2" maxLength="40" id="user-name" />
        <span className="popup__input-error popup__input-user-name-error"></span>
        <input className="popup__input popup__input_value_job" type="text" placeholder="Чем занимаетесь?" name="about" required maxLength="200" minLength="2" id="job" />
        <span className="popup__input-error popup__input-job-error"></span>
    </PopupWithForm>}

    {/* {isAddPlacePopupOpen && <PopupWithForm
        title="Новое&nbsp;место"
        name="add-card"
        buttonText="Создать">
        <input className="popup__input popup__input_value_cardname" id="placename" type="text" placeholder="Название" name="name" required maxLength="30" minLength="2" />
        <span className="popup__input-error popup__input-placename-error"></span>
        <input className="popup__input popup__input_value_cardlink" type="url" id="placelink" placeholder="Ссылка на картинку" name="link" required />
        <span className="popup__input-error popup__input-placelink-error"></span>      
    </PopupWithForm>} */}

    {/* {isEditAvatarPopupOpen && <PopupWithForm
        title="Обновить&nbsp;аватар"
        name="edit-avatar"
        buttonText="Сохранить">
        <input className="popup__input popup__input_value_avatarlink" type="url" id="avatarlink" placeholder="Ссылка на картинку" name="avatar" required />
        <span className="popup__input-error popup__input-avatarlink-error"></span>
    </PopupWithForm>} */}

    {/* <PopupWithForm
      title="Вы&nbsp;уверены?"
      isOpened={false}
      name="confirm"
      buttonText="Да" /> */}

    </div>
  );
}

export default App;