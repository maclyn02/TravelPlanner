import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import getJson from '../util'
import './CSS/CountryExplorer.css'
import LocationCard from './LocationCard'

function CountryExplorer() {

    const [{ country, places }, dispatch] = useStateValue()
    const [current_country, setCountry] = useState({})

    useEffect(() => {
        setCountry(getJson('Country').filter(c => c.title === country)[0])
    }, [country])

    
    return (
        <div className="countryExplorer">
            <div className="countryExplorer_header">
                <div>
                    <h2>{current_country?.title}</h2>
                    <img src={current_country?.flag} alt={current_country?.title} className='countryExplorer__flag'/>
                </div>
                <div>
                    <p>Capital: {current_country?.capital}</p>
                    <p>Language: {current_country?.language}</p>
                    <p>Currency: {`${current_country?.currency_name}(${current_country?.currency_symbol})`}</p>
                </div>
                <div>
                    Total number of locations: {places.filter(place => place.country === country).length}
                </div>
            </div>
            <div className="countryExplorer__placesContainer">
                {places.filter(place => (place.country === country)).map(place => (
                    <LocationCard key={place.title} location={place} type="Place" places={null} />
                ))}
            </div>
            
        </div>
    )
}

export default CountryExplorer
