import React from 'react';
import '../index.css';
import { api } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    api.getUserInfo()
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err))
  }, [])

  function handleUpdateUser (userInfo) {
    api.setUserInfo(userInfo)
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups())
  }

  function handleUpdateAvatar (userAvatar) {
    console.log('перед апишкой')
    api.setUserAvatar(userAvatar)
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups())
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick (card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card)
  }

  function closeAllPopups () {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page-container">
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      /> 

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

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

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

    </CurrentUserContext.Provider>
    </div>
  );
}

export default App;