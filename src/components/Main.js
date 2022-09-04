import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from '../utils/Api';
import Card from './Card';

function Main (props) {
  
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => setCards(cardsData))
      .catch((err) => console.log(err))
    }, [])

  return (
    <main className="main">

    <section className="profile">
      <img src={currentUser.avatar} alt="Аватар пользователя" className="profile__avatar" onClick={props.onEditAvatar} />
      <div className="profile__name-container">  
        <h1 className="profile__name">{currentUser.name}</h1>
        <button className="button profile__button-edit" onClick={props.onEditProfile} type="button" aria-label="Редактировать"></button>
      </div>
      <p className="profile__job">{currentUser.about}</p>
      <button className="button button-add" onClick={props.onAddPlace} type="button" aria-label="Добавить пост"></button>
    </section>

    <section className="posts" aria-label="Посты">
      <ul className="posts__list">
        {cards.map((card, i) => (
          <Card
          card={card}
          key={card._id}
          onCardClick={props.onCardClick}
          />
        ))}
      </ul>
    </section>

  </main>
  )
}

export default Main;