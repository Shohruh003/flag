import "./Card.css";
// import Germany from "../img/germany.png";



const Card = (props) => {
  return (
    <li className="item">
      <img className="item__img" src={props.src} alt="germany image" width="400" height="400"/>

      <h3 className="item__fromName">{props.name}</h3>

      <p className="population">Population:
        <span className="population__size"> {props.population}</span>
      </p>

      <p className="region">Region:
        <span className="region__name"> {props.region}</span>
      </p>

      <p className="capital">Capital:
        <span className="capital__name"> {props.capital}</span>
      </p>
    </li>
  )
}

export default Card;