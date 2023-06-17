import Header from "./header/header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./footer/footer.jsx";
import PopupWithForm from "./popupWithForm/PopupWithForm.jsx";
import ImagePopup from "./imagePopup/ImagePopup.jsx";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isCard, setIsCard] = useState({})
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)


  function closePopup() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setIsCard(card)
    setIsImagePopupOpen(true)
    // setEventListenerForDocument()
  }

  // function handleEditAvatarClick() {
    
  // }

  return (
    <>
  <div className="page">
    <Header/>
    <Main
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
    onAddCard={handleCardClick}
    />
    
    <Footer/>

    <PopupWithForm
      name='popup-profileEdit'
      title='Редактировать профиль'
      isOpen={isEditProfilePopupOpen}
      onClose={closePopup}
    >
      <input
            id="name"
            minLength={2}
            maxLength={40}
            required=""
            className="popup__input popup__input_type_name"
            name="name"
            type="text"
          />
          <span id="name-error" className="popup__error" />
          <input
            id="info"
            minLength={2}
            maxLength={200}
            required=""
            className="popup__input popup__input_type_info"
            name="info"
            type="text"
          />
          <span id="info-error" className="popup__error" />
    </PopupWithForm>

    <PopupWithForm
      name='popup-addCard'
      title='Новое место'
      popupButton='Создать'
      isOpen={isAddPlacePopupOpen}
      onClose={closePopup}
    >
      <input
            id="title"
            minLength={2}
            maxLength={30}
            className="popup__input popup__input_type_title"
            name="title"
            type="text"
            placeholder="Название"
            required=""
          />
          <span id="title-error" className="popup__error" />
          <input
            id="link"
            className="popup__input popup__input_type_url"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span id="link-error" className="popup__error" />
    </PopupWithForm>

    <PopupWithForm
      name='popup-avatar'
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      onClose={closePopup}
    >
      <input
          id="avatar"
          className="popup__input popup__input_type_avatar"
          name="avatar"
          type="url"
          placeholder="Ссылка на аватар"
          required=""
        />
        <span id="avatar-error" className="popup__error" />
    </PopupWithForm>

    <PopupWithForm
      name='popup-delete'
      title='Вы уверены ?'
      popupButton='Да'
    />

    <ImagePopup
      card={isCard} 
      isOpen={isImagePopupOpen}
      onClose={closePopup}
      />

  </div>
</>

  );
}

export default App;
