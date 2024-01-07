import CountryData from "../CountryData/CountryData";

// const CountryDetails = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
const CountryDetails = props => {
    const { country, handleVisitedCountries, handleVisitedFlag } = props;
    return (
        <div>
            <p><small>Country name : {country.name.common}</small></p>
            {/* <CountryData
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlag={handleVisitedFlag}></CountryData> */}

                <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;

// commented lines are for a little number of props
// non-commented ones are a large number of props i.g. 5, 6 or more than that