import "./Header.scss"
import Moon from "../img/moon.png"
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [state, setState] = useState(false);

  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <header className={theme}>
      <div className="container">
        <div className="header__inner">
        <h2 className="heading">Where in the world?</h2>

        <button onClick={() => {
          setState(!state)
          setTheme(state ? "light" : "dark");
        }} className="button">
          <img className="button__img" src={Moon} alt="moon img" width="20" height="20"/>
          <span>Dark Mode</span>
        </button>
        </div>
      </div>
    </header>
  )
}

export default Header;