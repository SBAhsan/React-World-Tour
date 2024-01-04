import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    console.log(country);
    const {name, flags, capital, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    // console.log(handleVisitedCountries);

    // to disable :
    // const handleVisited = () => {
    //     setVisited(true);
    // }
    
    // to toggle :
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Capital : {capital}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
            {/* <p>Languages : {languages}</p> */}
            <p><small>Code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? ' I have visited this country.' : ' I want to visit'}
        </div>
    );
};

export default Country;