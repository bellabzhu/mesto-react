import { apiConfig } from './constants.js'

class Api {
  constructor (apiConfig) {
    this._config = apiConfig
  }

  getInitialCards() {
    return fetch(this._config.fetchCards, {
        headers: this._config.headers
    })
    .then(this._checkResponse)
  }

  getUserInfo () {
    return fetch(this._config.fetchUserInfo, {
      headers: this._config.headers
    })
    .then(this._checkResponse)
  }

  setUserInfo (newData) {
    return fetch(this._config.fetchUserInfo, {
      method: 'PATCH',
      headers: this._config.headers,
      body: JSON.stringify({
        name: newData.name,
        about: newData.about
      })
    })
    .then(this._checkResponse)
  }

  setUserAvatar (avatarData) {
    return fetch(this._config.fetchAvatar, {
      method: 'PATCH',
      headers: this._config.headers,
      body: JSON.stringify({
        avatar: avatarData.avatar
      })
    })
    .then(this._checkResponse)
  }

  addCard (newCardData) {
    return fetch(this._config.fetchCards, {
      method: 'POST',
      headers: this._config.headers,
      body: JSON.stringify({
        name: newCardData.name,
        link: newCardData.link
      })
    })
    .then(this._checkResponse)
  }

  changeLikeCardStatus (cardId, isLiked, whoLiked) {
    return fetch(`${this._config.fetchCards}/${cardId}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._config.headers,
      body: JSON.stringify({
        likes: whoLiked
      })
    })
    .then(this._checkResponse);
  }

  delCard (cardId) {
    return fetch(`${this._config.fetchCards}/${cardId}`, {
      method: 'DELETE',
      headers: this._config.headers,
    })
    .then(this._checkResponse)
  }

  _checkResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const api = new Api (apiConfig)