export const moviesReducer = () => {
    return [
        { title: 'Spider-man', releasedDate: '05-07-2017', rating: 7.4 },
        { title: 'iron', releasedDate: '05-10-2017', rating: 9.0 },
        { title: 'Avenger-infinity', releasedDate: '04-24-2018', rating: 8.5 },
        { title: 'endgame', releasedDate: '40-24-2019', rating: 7.4 },
    ]
}

export const selectedMovie = (state = null, action) => {
    switch (action.type) {
        case 'SELECTED_MOVIE':
            return action.payload
        default:
            return state
    }
} 