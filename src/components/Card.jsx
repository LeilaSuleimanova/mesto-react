export default function Card({ card, onAddCard }) {
  return (
    <div>
      <img
        src={card.link}
        alt={`${card.name}`}
        className="element__image"
        onClick={() => onAddCard({ link: card.link, name: card.name })}
      />
      <button type="button" className="element__button-delete" />
      <div className="element__content">
        <h2 className="element__title">{card.name}</h2>
        <button type="button" className="element__button-like" />
        <span className="element__counter" />
      </div>
    </div>
  );
}
