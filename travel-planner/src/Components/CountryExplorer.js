import React from 'react'
import { useStateValue } from '../StateProvider'
import './CountryExplorer.css'
import LocationCard from './LocationCard'

function CountryExplorer() {

    const [{ country, places }, dispatch] = useStateValue()
    
    return (
        <div className="countryExplorer">
            <div className="countryExplorer_header">
                <h2>{country}</h2>
            </div>
            <div className="countryExplorer__placesContainer">
                {places.filter(place => (place.Country === country)).map(place => (
                    <LocationCard key={place.Title} location={place} type="Place" places={null} />
                ))}
            </div>
            
        </div>
    )
}

export default CountryExplorer
