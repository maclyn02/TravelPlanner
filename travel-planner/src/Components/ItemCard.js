import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './CSS/ItemCard.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ItemCard({ place }) {
    return (
        <Card className='itemCard'>
            <CardContent>
                <Typography className='itemCard__title'>
                    {place.title}
                </Typography>
                <img src={place.url} alt={place.title} />
                <div className='itemCard__location'> <span><LocationOnIcon/></span>{place.Place}, {place.country}</div>
            </CardContent>
        </Card>
    )
}

export default ItemCard
