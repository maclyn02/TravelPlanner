import visited from './Data/visited.json'
import wishlist from './Data/updated_wishlist.json'
import countries from './Data/countries.json'

function getJson(listType) {
    switch (listType) {
        case 'Wishlist': return wishlist
        case 'Visited': return visited
        // case 'Planned': return planned
        case 'Country': return countries
        default: return wishlist
    }
}

export default getJson