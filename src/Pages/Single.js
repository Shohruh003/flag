import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import "./pages.scss";

export const Single = () => {
  const {name} = useParams();

  const navigate = useNavigate();

  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/name/" + name)
    .then(function (response) {
      setCountry(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [name]) 
  return (
    <>
      <h1>Single {name}</h1>
      <button className='back' onClick={() => navigate(-1)}>Back</button>
      {country.length && (
        <div>
          {country.map((e) => <div key={e.name.common} className='row'>
            <img  width={560}
                  height={401}
                  src={e.flags.svg} 
                  alt={e.name.official} />
            
            <div>
              <h1>{e.name.common}</h1>
              <div className='row'>
                <div>
                <p>Native Name <span>
                    {
                      e.name.nativeName[Object.keys(e.name.nativeName)[0]].common
                    }
                  </span>
                </p>
                <p>Population: <span>
                    {
                      e.population
                    }
                  </span>
                </p>
                <p>Region: <span>
                    {
                      e.region
                    }
                  </span>
                </p>
                <p>Sub  region: <span>
                    {
                      e.subregion
                    }
                  </span>
                </p>
                <p>Capital: <span>
                    {
                      e.capital
                    }
                  </span>
                </p> 
                </div>
                <div>
                <p>Top Level Domain: <span>
                    {
                      e.tld
                    }
                  </span>
                </p>
                <p>Currencies: <span>
                    {
                      e.currencies[Object.keys(e.currencies)].name
                    }
                  </span>
                </p>
                <p>Languages: <span>
                    {
                      e.languages[Object.keys(e.languages)[0]]
                    }
                  </span>
                </p>
                </div>
              </div>
                {e?.borders?.length && (
                <div> 
                  Border Countries: 
                  {e.borders.map(e =>
                    <button key={e} >{e}</button>
                  )}
                </div>
              )}
            </div>
          </div> )}
        </div>
      )}
    </>
  );
};
