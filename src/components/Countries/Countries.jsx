import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountries = country => {
        console.log('Add this to your visited country list');
        const addNewCountry = [...visitedCountries, country];
        setVisitedCountries(addNewCountry);
    }

    const handleVisitedFlag = flag => {
        const addNewFlag = [...visitedFlag, flag];
        setVisitedFlag(addNewFlag);
    }

    return (
        <div>
            {/* All countries list */}
            <h3>Number of countries : {countries.length}</h3>

            {/* visited countries list */}
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* visited countries flags */}
            <div className="flag-container">
                {
                    // visitedFlag.map(flag => <img key={flag.cca3} src={flag}></img>)
                    visitedFlag.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;