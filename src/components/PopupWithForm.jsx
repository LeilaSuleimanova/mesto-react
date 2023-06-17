export default function PopupWithForm({
  name,
  title,
  popupButton,
  children,
  isOpen,
  onClose,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container section">
        <button
          aria-label="сlose"
          type="button"
          className="popup__close"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          id="popup-form-info"
          name="popup-form-info"
          noValidate=""
        >
          {children}
          <button className="popup__save-button" type="submit">
            {popupButton || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}
