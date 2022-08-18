function Card (props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="card">
      <button className="button button-delete" aria-label="Удалить" type="button"></button>
      <img src={props.card.link} onClick={handleClick} className="card__image" alt={props.card.name} />
      <div className="card__container">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes-container">
          <button className="button button-like" aria-label="Нравится" type="button"></button>
          <span className="card__likes-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;