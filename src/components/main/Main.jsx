import { useEffect, useState } from "react";
import api from "../../utils/api.js";
import Card from "../card/card.jsx";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onAddCard,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [card, setCard] = useState([]);

  useEffect(() => {
    Promise.all([api.getData(), api.getInitialCards()]).then(
      ([infoUser, infoCard]) => {
        setUserName(infoUser.name);
        setUserDescription(infoUser.about);
        setUserAvatar(infoUser.avatar);
        infoCard.forEach((data) => (data.myId = infoUser._id));
        setCard(infoCard);
      }
    );
  }, []);

  return (
    <main className="content">
      <section className="profile section">
        <div className="profile__container">
          <button
            type="button"
            className="profile__avatar-button"
            onClick={onEditAvatar}
          >
            <img
              src={userAvatar}
              alt="Аватар профиля"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <div className="profile__info-content">
              <h1 className="profile__title">{userName}</h1>
              <button
                aria-label="button"
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section aria-label="Галерея карточек" className="gallery">
        <ul className="elements section">
          {card.map((data) => {
            return (
              <li className="element" key={data._id}>
                <Card card={data} onAddCard={onAddCard} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
