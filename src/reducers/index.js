import { combineReducers } from 'redux';  
import { selectedMovie, moviesReducer } from './MoviedReducers';

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovie
})