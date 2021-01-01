import React, { useEffect, useState } from 'react'
import './Main.css'
import Map from './Map'
import NavCard from './NavCard'
import visited from '../Data/visited.json'
import wishlist from '../Data/wishlist.json'
import ItemCard from './ItemCard'

function Main() {

    const [selectedTab, setSelectedTab] = useState('Wishlist')
    const [numPlacesV, setNumPlacesV] = useState(0)
    const [numCountriesV, setNumCountriesV] = useState(0)
    const [numPlacesW, setNumPlacesW] = useState(0)
    const [numCountriesW, setNumCountriesW] = useState('Pending...')

    useEffect(() => {
        setNumPlacesV(visited.length)
        const distinctCountriesV = [...new Set(visited.map(place => place.Country))]
        setNumCountriesV(distinctCountriesV.length)

        setNumPlacesW(wishlist.length)
        // const distinctCountriesW = [...new Set(wishlist.map(place => place.Country))]
        // setNumCountriesV(distinctCountriesW.length)
    }, [])

    return (
        <div className='main'>
            <div className="main__nav">
                <div className="main__navItem" active={`${selectedTab === 'Visited'}`} onClick={event => setSelectedTab('Visited')}>
                    <NavCard title={'Visited'} countCountries={numCountriesV} countPlaces={numPlacesV} />
                </div>
                <div className="main__navItem" active={`${selectedTab === 'Planned'}`} onClick={event => setSelectedTab('Planned')}>
                    <NavCard title={'Planned'} countCountries={0} countPlaces={0} />
                </div>
                <div className="main__navItem" active={`${selectedTab === 'Wishlist'}`} onClick={event => setSelectedTab('Wishlist')}>
                    <NavCard title={'Wishlist'} countCountries={numCountriesW} countPlaces={numPlacesW} />
                </div>
            </div>
            <div className="main__container">
                <div className="main__containerLeft">
                    <Map />
                </div>
                <div className="main__containerRight">
                    <h3>Recent</h3>
                    <div className="main__recent">
                        {visited.map(place => (
                            <ItemCard place={place}></ItemCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
