import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/index';

const MovieList = (props) => {
    const listItems = props.movies.map(movie => {
        return (
            <div key={movie.title}>
                <span>{movie.title}</span>
                <button onClick={() => props.selectMovie(movie)}>Details</button>
            </div>
        )
    })

    return (
        <div>
            <h2>Movie List</h2>
            <ul>{listItems}</ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state :', state);
    return {
        movies: state.movies
    }
}

// const mapDispatchToProps = (dispatch) =>  {
//     return {
//         selectedMovie: (movies) => dispatch(selectMovie(movies))
//     }
// }
export default connect(mapStateToProps, {selectMovie}) (MovieList);