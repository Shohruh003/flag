import Header from "./components/Header";
import Search from "./components/Search";
import {Routes, Route} from 'react-router-dom';
import "./App.scss";
import { Single } from "./Pages/Single";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Header/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Search/>}/>
          <Route path={'/:name'} element={<Single/>}/>
        </Routes>
    </div>
    </div>
  );
}

export default App;
