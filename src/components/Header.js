import "./Header.css"
import Moon from "../img/moon.png"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
        <h2 className="heading">Where in the world?</h2>
        <button className="button">
          <img className="button__img" src={Moon} alt="moon img" width="20" height="20"/>
          <span>Dark Mode</span>
        </button>
        </div>
      </div>
    </header>
  )
}

export default Header;