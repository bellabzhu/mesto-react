import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setisImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick () {
    setisEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick () {
    setisEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick () {
    setisAddPlacePopupOpen(true);
  }

  function handleCardClick (card) {
    setisImagePopupOpen(true);
    setSelectedCard(card)
  }

  function closeAllPopups () {
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisImagePopupOpen(false);
  }

  return (
    <div className="page-container">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
      <Footer />

      <PopupWithForm
        title="Редактировать&nbsp;профиль"
        name="edit-name"
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить">
          <input className="popup__input popup__input_value_name" type="text" placeholder="Ваше имя" name="name" required minLength="2" maxLength="40" id="user-name" />
          <span className="popup__input-error popup__input-user-name-error"></span>
          <input className="popup__input popup__input_value_job" type="text" placeholder="Чем занимаетесь?" name="about" required maxLength="200" minLength="2" id="job" />
          <span className="popup__input-error popup__input-job-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое&nbsp;место"
        name="add-card"
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать">
          <input className="popup__input popup__input_value_cardname" id="placename" type="text" placeholder="Название" name="name" required maxLength="30" minLength="2" />
          <span className="popup__input-error popup__input-placename-error"></span>
          <input className="popup__input popup__input_value_cardlink" type="url" id="placelink" placeholder="Ссылка на картинку" name="link" required />
          <span className="popup__input-error popup__input-placelink-error"></span>      
      </PopupWithForm>

      <PopupWithForm
        title="Обновить&nbsp;аватар"
        name="edit-avatar"
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить">
          <input className="popup__input popup__input_value_avatarlink" type="url" id="avatarlink" placeholder="Ссылка на картинку" name="avatar" required />
          <span className="popup__input-error popup__input-avatarlink-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Вы&nbsp;уверены?"
        isOpened={false}
        onClose={closeAllPopups}
        name="confirm"
        buttonText="Да" 
      />

      <ImagePopup
        isOpened={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;