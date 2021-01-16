export const initialState = {
    user: null,
    country: null,
    places: null
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER': return {
            ...state,
            user: action.user
        }
        case 'SET_CURRENT_LOCATION':
            return {
            ...state,
            country: action.item.country,
            places: action.item.places
        }
        default:
            return state
    }
}

export default reducer