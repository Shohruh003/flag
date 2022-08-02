import "./Search.css";
import SearchImg from "../img/search.png";

const Search = () => {
  return (
    <form className="form" method="post">
        <label className="label">
          <img src={SearchImg} alt="search img" width="20" height="20"/>
          <input className="input" type="text" placeholder="Search for a country..."/>
        </label>

        <select className="select">
        <option value="" selected disabled>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceanie">Oceanie</option>
        </select>
    </form>
  )
}

export default Search;