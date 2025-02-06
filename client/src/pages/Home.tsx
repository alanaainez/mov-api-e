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
    <main>
            <section className='w-full flex-grow flex flex-col sm:flex-row flex-wrap py-4 flex-grow' role="main" >
        {/* <Outlet /> */}
          <div className='w-full flex-grow pt-1 px-3'>
            <MovieListHeading heading='Movies' />
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className='mb-4 flex'>
            <MovieList movies={movies} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie} />
          </div>
      </section>
      <section className='w-full flex-grow flex flex-col sm:flex-row flex-wrap py-4 flex-grow' role="main" >
          <div className='w-full flex-grow pt-1 px-3'>
            <MovieListHeading heading='Favourites' />
          </div>
          <div className='mb-4 flex row'>
            <MovieList movies={favourites} favouriteComponent={AddFavourite} />
          </div>
      </section>
    </main>
  )
}

export default App
