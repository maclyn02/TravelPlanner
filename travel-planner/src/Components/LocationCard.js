import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import getJson from '../util'
import './CSS/LocationCard.css'
import { Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


function LocationCard({ location, type, places }) {

    const [locationName, setLocationName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [, dispatch] = useStateValue()
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (type === 'Country') {
            setLocationName(location)
            const image = getJson('Country').filter(country => country.title === location).map(country => country.url)
            setImageUrl(image ? image : 'https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-4.jpg')
        }
        else {
            setLocationName(location.title || '')
            setImageUrl(location.url)
        }
    }, [location, type])

    const handleClickLocation = () => {
        if (type === 'Country')
            dispatch({
                type: 'SET_CURRENT_LOCATION',
                item: {
                    country: location,
                    places: places
                }
            })
        else
            setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        console.log(modalOpen)
    }

    return (
        <div className='locationCard'>
            <div onClick={event => handleClickLocation()}>
                <img src={imageUrl} alt={locationName} />
                <div className='locationCard__title'>
                    {locationName}
                </div>
            </div>
            <Dialog onClose={handleCloseModal} open={modalOpen} className='locationCard__modal'>
                <div className='locationCard__modalHeader'>
                    {locationName}
                    <IconButton onClick={event => handleCloseModal()}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <img src={imageUrl} alt={locationName} />
            </Dialog>
        </div>
    )
}

export default LocationCard
