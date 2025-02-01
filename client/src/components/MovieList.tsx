// import React from 'react';

const MovieList = (props: any) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie: any, index) => (
                <div className='image-container object-contain h-full justify-start mx-1' key={index}>
                    <img src={movie.Poster} alt='Movie poster'></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;