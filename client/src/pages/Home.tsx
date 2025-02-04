import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavourite from '../components/AddFavourite';
import '../index.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    
        const response = await fetch(url);
        const responseJson = await response.json();
    
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };
    
    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    };
    
    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

  return (
    <div>
      
      <main className='w-full flex pt-5 px-5'>
        {/* <Outlet /> */}
          <div className='w-full flex pt-5 px-5'>
            <MovieListHeading heading='Movies' />
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <section className='w-full flex pt-5 px-5'>
            <MovieList movies={movies} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie} />
          </section>
      </main>
    </div>
  )
}

export default App
