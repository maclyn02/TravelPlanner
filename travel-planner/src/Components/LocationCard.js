import React, { useEffect, useState } from 'react'
import getJson from '../util'
import './LocationCard.css'

function LocationCard({ location, type }) {

    const [locationName, setLocationName] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        if (type === 'Country') {
            setLocationName(location)
            const image = getJson('Country').filter(country => country.Title === location ? true : false).map(country => country.URL)
            setImageUrl(image ? image : 'https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-4.jpg')
        }
        else {
            setLocationName(location?.Title || '')
            setImageUrl(location.URL)
        }
    }, [location, type])

    return (
        <div className='locationCard'>
            <div>
                <img src={imageUrl} alt={location} />
                <div className='locationCard__title'>
                    {locationName}
                </div>
            </div>
        </div>
    )
}

export default LocationCard
