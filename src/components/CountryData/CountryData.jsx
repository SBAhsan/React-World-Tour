const CountryData = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    return (
        <div>
            <p><small>Capital : {country.capital}</small></p>
        </div>
    );
};

export default CountryData;