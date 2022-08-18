import React from "react";
import { api } from '../utils/Api'

function Main (props) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
      })
  }, [userName, userDescription, userAvatar])

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => setCards(cardsData))
    }, [])

  return (
    <main className="main">

    <section className="profile">
      <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" onClick={props.onEditAvatar} />
      <div className="profile__name-container">  
        <h1 className="profile__name">{userName}</h1>
        <button className="button profile__button-edit" onClick={props.onEditProfile} type="button" aria-label="Редактировать"></button>
      </div>
      <p className="profile__job">{userDescription}</p>
      <button className="button button-add" onClick={props.onAddPlace} type="button" aria-label="Добавить пост"></button>
    </section>

    <section className="posts" aria-label="Посты">
      <ul className="posts__list">

    {cards.map((card, i) => (
            <li className="card" key={card._id}>
            <button className="button button-delete" aria-label="Удалить" type="button"></button>
            <img src={card.link} className="card__image" alt={card.name} />
            <div className="card__container">
              <h2 className="card__title">{card.name}</h2>
              <div className="card__likes-container">
                <button className="button button-like" aria-label="Нравится" type="button"></button>
                <span className="card__likes-counter">{card.likes.length}</span>
              </div>
            </div>
          </li>
      ))}
      </ul>
    </section>

  </main>
  )
}

export default Main;