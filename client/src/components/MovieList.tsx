// import React from 'react';

const MovieList = (props: any) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie: any, index: any) => (
            <div className='image-container flex justify-content-start m-3' key={index}>
                <img src={movie.Poster} alt='movie poster'></img>
                <div onClick={() => props.handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-content-center'>
                    <FavouriteComponent />
                </div>
            </div>
        ))}
        </>
    );
};

export default MovieList;