import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './CSS/ItemCard.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';

const error_image = 'https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-4.jpg'

function ItemCard({ place }) {
    return (
        <Card className='itemCard'>
            <CardContent>
                <Typography className='itemCard__title'>
                    {place.title}
                </Typography>
                <img src={place.url} alt={place.title} onError={event => { event.target.onerror = null; event.target.src = error_image }}/>
                <div className='itemCard__location'> <span><LocationOnIcon/></span>{place.Place}, {place.country}</div>
            </CardContent>
        </Card>
    )
}

export default ItemCard
