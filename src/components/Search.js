import "./Search.css";
import SearchImg from "../img/search.png";
import Card from "./Card";
import { useEffect, useState } from "react";

const Search = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    if (value.length) {
      fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((er) => console.log(er));
    } else if (region !== "Filter by region" && region.length) {
      fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((er) => console.log(er));
    } else {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((er) => console.log(er));
    }
  }, [value, region]);

  return (
    <div>
      <div className="form">
        <label className="label">
          <img src={SearchImg} alt="search img" width="20" height="20" />
          <input
            onKeyUp={(evt) => {
              if (evt.code === "Enter") {
                setValue(evt.target.value);
              }
            }}
            className="input"
            type="text"
            placeholder="Search for a country..."
          />
        </label>

        <select
          defaultValue={"Filter by Region"}
          onChange={(evt) => {
            setRegion(evt.target.value);
          }}
          className="select"
        >
          <option disabled>Filter by Region</option>
          <option defaultValue="Africa">Africa</option>
          <option defaultValue="America">America</option>
          <option defaultValue="Asia">Asia</option>
          <option defaultValue="Europe">Europe</option>
          <option defaultValue="Oceanie">Oceanie</option>
        </select>
      </div>

      <ul className="cardList">
        {todos.length ? todos.map((e) => (
              <Card
                key={e.name.common}
                name={e.name.common}
                population={e.population}
                src={e.flags.png}
                region={e.region}
                capital={e.capital}
              />
            ))
          : "Loading..."}
      </ul>
    </div>
  );
};

export default Search;
