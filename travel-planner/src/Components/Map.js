import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import apikey from '../apikey'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import getJson from '../util'
import './Map.css'

function Map({ listType }) {

    const [places, setPlaces] = useState([])

    useEffect(() => {
        setPlaces(getJson(listType))
    }, [listType])

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 0
    }

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: apikey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            {places.filter(place => place.Lat === 'N/A' ? false : true).map((place,index) => (
                <LocationOnIcon
                    key={index}
                    lat={place.Lat}
                    lng={place.Lng}
                    className={`map__pin map__pin${listType}`}
                />
            ))}
        </GoogleMapReact>
    )
}

export default Map