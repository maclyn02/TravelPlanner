export const initialState = {
    user: null
}

function reducer(state, action) {
    switch (action) {
        case 'SET_USER': console.log('LOGIN...')
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer