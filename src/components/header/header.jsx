import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="header section">
      <img src={logo} alt="Логотип сайта Место" className="header__logo" />
    </header>
  );
}
