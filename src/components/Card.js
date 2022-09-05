import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card (props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button-delete' : 'button-delete_hidden'}`
  ); 
    
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `button ${isLiked ? 'button-like button-like_pressed' : 'button-like'}`
  ); 

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick () {
    props.onCardLike(props.card)
  }

  function handleDeleteClick () {
    props.onCardDelete(props.card)
  }

  return (
    <li className="card">
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} aria-label="Удалить" type="button"></button>
      <img src={props.card.link} onClick={handleClick} className="card__image" alt={props.card.name} />
      <div className="card__container">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="Нравится" type="button"></button>
          <span className="card__likes-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;