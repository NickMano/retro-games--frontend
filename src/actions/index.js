export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
})

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
})

export const setUser = payload => ({
    type: 'SET_USER',
    payload
})