import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup (props) {

  const [placeName, setPlaceName] = useState('');
  const [placeLink, setPlaceLink] = useState('');

  function handlePlaceNameChange (e) {
    setPlaceName(e.target.value)
  }

  function handlePlaceLinkChange (e) {
    setPlaceLink(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault();
    props.onAddPlace({
      name: placeName,
      link: placeLink,
    })
  }

  return (
    <PopupWithForm
      title="Новое&nbsp;место"
      name="add-card"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Создать">
        <input className="popup__input popup__input_value_cardname" id="placename" type="text" placeholder="Название" name="name" required maxLength="30" minLength="2" onChange={handlePlaceNameChange} value={placeName} />
        <span className="popup__input-error popup__input-placename-error"></span>
        <input className="popup__input popup__input_value_cardlink" type="url" id="placelink" placeholder="Ссылка на картинку" name="link" required onChange={handlePlaceLinkChange} value={placeLink}/>
        <span className="popup__input-error popup__input-placelink-error"></span>      
    </PopupWithForm>
  )
}

export default AddPlacePopup;