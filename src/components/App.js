import { useEffect, useState } from 'react';
import '../index.css';
import { api } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmationPopup from './ConfirmationPopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({name: '', about: '', avatar: '', cohort: '', _id: ''})
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then( ([user, cards]) => {
        setCards(cards);
        setCurrentUser(user);
      })
      .catch((err) => console.log(err))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked, currentUser)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch((err) => console.log(err))
  }

  function handleCardDelete (card) {
    api.delCard(card._id)
      .then(() => setCards(cards.filter((item) => item._id !== card._id)))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups())
  }

  function handleUpdateUser (userInfo) {
    api.setUserInfo(userInfo)
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups())
  }

  function handleUpdateAvatar (userAvatar) {
    api.setUserAvatar(userAvatar)
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups())
  }

  function handleAddPlace (card) {
    api.addCard(card)
      .then((cardData) => setCards([cardData, ...cards]))
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

  function handleCallConfirmationPopup (card) {
    setIsConfirmationPopupOpen(true);
    setSelectedCard(card)
  }

  function closeAllPopups () {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmationPopupOpen(false);
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
        cards={cards}
        onCardLike={handleCardLike}
        onDeleteClick={handleCallConfirmationPopup}
      />

      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
      />      

      <ConfirmationPopup 
        isOpen={isConfirmationPopupOpen} 
        onClose={closeAllPopups}
        onCardDelete={handleCardDelete}
        selectedCard={selectedCard}
      />

      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </CurrentUserContext.Provider>
    </div>
  );
}

export default App;