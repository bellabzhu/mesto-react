import React from "react";

function PopupWithForm (props) {

  return (
    <div className={`popup popup_type_${props.name} 
    ${props.isOpened
    ? 'popup_opened' 
    : ''
    } `}
    >
      <div className="popup__container popup__container-area">
        <button className="button button-close" onClick={props.onClose} type="button" aria-label="Закрыть"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_type_${props.name}`} name={`form_${props.name}`} noValidate>
          {props.children}
          <button type="submit" className="button button-submit" value={props.buttonText}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;


    // <div className="popup popup_type_edit-name">
    //   <div className="popup__container popup__container-area">
    //     <button className="button button-close" type="button" aria-label="Закрыть"></button>
    //     <h2 className="popup__title">Редактировать&nbsp;профиль</h2>
    //     <form className="popup__form popup__form_type_editname" name="form_name" noValidate>
    //       <input className="popup__input popup__input_value_name" type="text" placeholder="Ваше имя" name="name" required minLength="2" maxLength="40" id="user-name" />
    //       <span className="popup__input-error popup__input-user-name-error"></span>
    //       <input className="popup__input popup__input_value_job" type="text" placeholder="Чем занимаетесь?" name="about" required maxLength="200" minLength="2" id="job" />
    //       <span className="popup__input-error popup__input-job-error"></span>
    //       <button type="submit" className="button button-submit" value="Сохранить">Сохранить</button>
    //     </form>
    //   </div>
    // </div>

    // <div className="popup popup_type_add-card">
    //   <div className="popup__container popup__container-area">
    //   <button className="button button-close" type="button" aria-label="Закрыть"></button>
    //   <h2 className="popup__title">Новое&nbsp;место</h2>
    //   <form className="popup__form popup__form_type_addcard" name="form_card" noValidate>
    //     <input className="popup__input popup__input_value_cardname" id="placename" type="text" placeholder="Название" name="name" required maxLength="30" minLength="2" />
    //     <span className="popup__input-error popup__input-placename-error"></span>
    //     <input className="popup__input popup__input_value_cardlink" type="url" id="placelink" placeholder="Ссылка на картинку" name="link" required />
    //     <span className="popup__input-error popup__input-placelink-error"></span>
    //     <button type="submit" className="button button-submit" value="Создать">Создать</button>
    //   </form>
    //   </div>
    // </div>

    // <div className="popup popup_type_edit-avatar">
    //   <div className="popup__container popup__container-area">
    //   <button className="button button-close" type="button" aria-label="Закрыть"></button>
    //   <h2 className="popup__title">Обновить&nbsp;аватар</h2>
    //   <form className="popup__form popup__form_type_edit-avatar" name="form_avatar" noValidate>
    //     <input className="popup__input popup__input_value_avatarlink" type="url" id="avatarlink" placeholder="Ссылка на картинку" name="avatar" required />
    //     <span className="popup__input-error popup__input-avatarlink-error"></span>
    //     <button type="submit" className="button button-submit" value="Сохранить">Сохранить</button>
    //   </form>
    //   </div>
    // </div>

    // <div className="popup popup_type_confirm">
    //   <div className="popup__container popup__container-area">
    //   <button className="button button-close" type="button" aria-label="Закрыть"></button>
    //   <h2 className="popup__title">Вы&nbsp;уверены?</h2>
    //   <form className="popup__form popup__form_type_confirm" name="form_confirm" noValidate>
    //     <button type="submit" className="button button-submit" value="Да">Да</button>
    //   </form>
    //   </div>
    // </div>