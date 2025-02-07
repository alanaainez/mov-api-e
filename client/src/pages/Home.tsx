import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavourite from '../components/AddFavourite';
import RemoveFavourites from '../components/RemoveFavourites';
import '../index.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('Star Wars');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    
        const response = await fetch(url);
        const responseJson = await response.json();
    
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };
    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };
    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );
    
        setFavourites(movieFavourites);
    }, []);
    
    const addFavouriteMovie = (movie) => {
            if (!favourites.some((fav) => fav.imdbID === movie.imdbID)) {
                const newFavouriteList = [...favourites, movie];
                setFavourites(newFavouriteList);
                saveToLocalStorage(newFavouriteList);
            }
    };
    
    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );
    
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
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
            <MovieListHeading heading='Favorites' />
          </div>
          <div className='mb-4 flex row'>
            <MovieList
                movies={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={RemoveFavourites}
            />
          </div>
      </section>
    </main>
  )
}

export default App
