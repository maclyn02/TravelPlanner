import React from 'react'
import GoogleMapReact from 'google-map-react';
import apikey from '../apikey'
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Map() {

    // const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 0
    };

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: apikey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <LocationOnIcon
                lat={59.955413}
                lng={30.337844}
            />
        </GoogleMapReact>
    )
}

export default Map