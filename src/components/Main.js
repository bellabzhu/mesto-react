import React from "react";


function Main (props) {
  
  return (
    <main className="main">

    <section className="profile">
      <img src="#" alt="Аватар пользователя" className="profile__avatar" onClick={props.onEditAvatar} />
      <div className="profile__name-container">  
        <h1 className="profile__name">ETO PRIMER</h1>
        <button className="button profile__button-edit" onClick={props.onEditProfile} type="button" aria-label="Редактировать"></button>
      </div>
      <p className="profile__job"></p>
      <button className="button button-add" onClick={props.onAddPlace} type="button" aria-label="Добавить пост"></button>
    </section>

    <section className="posts" aria-label="Посты">
      <ul className="posts__list">
      </ul>
    </section>

    <div className="popup popup_type_image-zoomed">
      <div className="popup__zoom-container popup__container-area">
      <button className="button button-close" type="button" aria-label="Закрыть"></button>
      <figure className="popup__zoom-container">
        <img src="#" className="popup__image-zoomed" alt="alt" />
        <figcaption className="popup__zoom-caption"></figcaption>
      </figure>
      </div>
    </div>

    <template className="card-template">
    <li className="card">
      <button className="button button-delete" aria-label="Удалить" type="button"></button>
      <img className="card__image" alt="" />
      <div className="card__container">
        <h2 className="card__title"></h2>
        <div className="card__likes-container">
          <button className="button button-like" aria-label="Нравится" type="button"></button>
          <span className="card__likes-counter">0</span>
        </div>
      </div>
    </li>
    </template>

  </main>
  )
}

export default Main;