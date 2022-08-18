// const imageButtonAdd = new URL('../images/button-add.svg', import.meta.url);
// const imageButtonClose = new URL('../images/button-close.svg', import.meta.url);
// const imageButtonDelete = new URL('../images/button-delete.svg', import.meta.url);
// const imageButtonEditPen = new URL('../images/button-edit-pen.svg', import.meta.url);
// const imageButtonLikeActive = new URL('../images/button-like_active.svg', import.meta.url);
// const imageButtonDisabled = new URL('../images/button-like_disabled.svg', import.meta.url);
// const imageLogo = new URL('../images/logo.svg', import.meta.url);

// const images = [
//   { name: 'imageButtonAdd', link: imageButtonAdd },
//   { name: 'imageButtonClose', link: imageButtonClose },
//   { name: 'imageButtonDelete', link: imageButtonDelete },
//   { name: 'imageButtonEditPen', link: imageButtonEditPen },
//   { name: 'imageButtonLikeActive', link: imageButtonLikeActive },
//   { name: 'imageButtonDisabled', link: imageButtonDisabled },
//   { name: 'imageLogo', link: imageLogo},
// ]

// export const cardSelectors = {
//   template: '.card-template',
//   card: '.card',
//   title: '.card__title',
//   image: '.card__image',
//   buttonLike: '.button-like',
//   likesCounter: '.card__likes-counter',
//   buttonLikePressed: 'button-like_pressed',
//   buttonDel: '.button-delete',
// }

// export const popupSelectors = {
//   opened: 'popup_opened',
//   area: '.popup__container-area',
//   buttonClosed: 'button-close',
//   form: '.popup__form',
//   input: '.popup__input',
//   popupImg: '.popup_type_image-zoomed',
//   popupCard: '.popup_type_add-card',
//   popupName: '.popup_type_edit-name',
//   popupConfirm: '.popup_type_confirm',
//   popupAvatar: '.popup_type_edit-avatar',
//   popupImgCaption: '.popup__zoom-caption',
//   popupImgImage: '.popup__image-zoomed',
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.button-submit',
//   inactiveButtonClass: 'button-submit_invalid',
//   inputErrorClass: 'popup__input_type_error',
// }

// export const profileSelectors = {
//   name: '.profile__name',
//   about: '.profile__job',
//   avatar: '.profile__avatar'
// }

export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '558a80cb-3690-42b7-804d-cc5d2ae305e4',
    'Content-Type': 'application/json'
  },
  fetchUserInfo: 'https://nomoreparties.co/v1/cohort-46/users/me',
  fetchCards:'https://mesto.nomoreparties.co/v1/cohort-46/cards',
  fetchAvatar: 'https://mesto.nomoreparties.co/v1/cohort-46/users/me/avatar',
  fetchLikes: 'https://mesto.nomoreparties.co/v1/cohort-46/cards/cardId/likes'
}

// export const formElementName = document.querySelector('.popup__form_type_editname'); 
// export const formElementCard = document.querySelector('.popup__form_type_addcard');
// export const formElementConfirm = document.querySelector('.popup__form_type_confirm');
// export const formElementAvatar = document.querySelector('.popup__form_type_edit-avatar');
// const profile = document.querySelector('.profile');
// export const buttonEdit = profile.querySelector('.profile__button-edit');
// export const buttonAdd = profile.querySelector('.button-add');
// export const avatarElement = profile.querySelector('.profile__avatar');
// export const cardsContainer = '.posts__list';