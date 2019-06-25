import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <MovieList />
      <MovieDetails />
    </div>
  );
}

export default App;
