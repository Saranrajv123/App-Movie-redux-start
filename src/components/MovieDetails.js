import React from 'react';
import { connect } from 'react-redux';

const componentName = (props) => {
    if (!props.selectedMovie) {
        return (
            <div className='detail'>
                <h2>Movie</h2>
                <div className='properties'>
                    <p>Select Movies</p>
                </div>
            </div>
        )
    }
    
    else {
        return (
            <div className='detail'>
                <h2>Movie</h2>
                <div className='properties'>
                    <p>Title: {props.selectedMovie.title}</p>
                    <p>Title: {props.selectedMovie.releasedDate}</p>
                    <p>Title: {props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}
export default connect(mapStateToprops)(componentName);
