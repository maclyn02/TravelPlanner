import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './CSS/NavCard.css'

function NavCard({ title, countPlaces, countCountries }) {
    return (
        <Card className='navCard'>
            <CardContent>
                <Typography className='navCard__header'>
                    {title}
                </Typography>
                <Typography>
                    Places: {countPlaces}
                </Typography>
                <Typography>
                    Countries: {countCountries}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NavCard
