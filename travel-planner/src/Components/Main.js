import React, { useEffect, useState } from 'react'
import './CSS/Main.css'
import Map from './Map'
import NavCard from './NavCard'
import getJson from '../util'
import ItemCard from './ItemCard'
import LocationCard from './LocationCard'
import { Link } from 'react-router-dom'

function Main() {

    const [selectedTab, setSelectedTab] = useState('Wishlist')
    // list items for selected tab
    const [places, setPlaces] = useState([])
    const [distinctCountries, setDistinctCountries] = useState([])

    useEffect(() => {

        const jsonData = getJson(selectedTab)
        setPlaces(jsonData)
        setDistinctCountries(getDistinct(jsonData, 'Country'))

    }, [selectedTab])

    const getDistinct = (from_array, field_name) => {
        return [...new Set(from_array.map(item => item[field_name]))]
    }

    return (
        <div className='main'>
            <div className="main__nav">
                <div className="main__navItem" active={`${selectedTab === 'Visited'}`} onClick={event => setSelectedTab('Visited')}>
                    <NavCard title={'Visited'} countCountries={getDistinct(getJson('Visited'), 'Country').length} countPlaces={getJson('Visited').length} />
                </div>
                <div className="main__navItem" active={`${selectedTab === 'Planned'}`} onClick={event => setSelectedTab('Planned')}>
                    <NavCard title={'Planned'} countCountries={0} countPlaces={0} />
                </div>
                <div className="main__navItem" active={`${selectedTab === 'Wishlist'}`} onClick={event => setSelectedTab('Wishlist')}>
                    <NavCard title={'Wishlist'} countCountries={getDistinct(getJson('Wishlist'), 'Country').length} countPlaces={getJson('Wishlist').length} />
                </div>
            </div>
            <div className="main__container">
                <div className="main__containerLeft">
                    <div className="map__container">
                        <Map listType={selectedTab} />
                    </div>
                    <div className="main__listHeader">
                        {selectedTab} Countries
                    </div>
                    <hr />
                    <div className="main__listContainer">
                        {distinctCountries.filter(country => country !== 'N/A').map(country => (
                            <Link to='/places'>
                                <LocationCard key={country} location={country} type="Country" places={places} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="main__containerRight">
                    <h3>Recent</h3>
                    <div className="main__recent">
                        {getJson('Visited').map((place, index) => (
                            <ItemCard key={index} place={place}></ItemCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
