import React from 'react';

<<<<<<< HEAD
interface AddFavouriteProps {
  userId: string;
}

const AddFavourite: React.FC<AddFavouriteProps> = ({ userId }) => {
  const addToFavourites = () => {
    const favourite = { userId, movieId: 'some-movie-id', movieTitle: 'Some Movie Title' }; // Replace with actual movie data
    let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    favourites.push(favourite);
    localStorage.setItem('favourites', JSON.stringify(favourites));
  };

  return (
    <div onClick={addToFavourites} className="cursor-pointer">
      <span className='mr-2 text-white text-base'>Add to Favourites</span>
      <svg
        width='1em'
        height='1em'
        viewBox='0 0 16 16'
        className='bi bi-heart-fill block'
        fill='red'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
        />
      </svg>
    </div>
  );
=======
const AddFavourite = () => {
    return (
        <div className="flex flex-grow items-center px-2">
            <span className='mr-2 text-white text-base'>Add to favorites</span>
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-heart-fill block'
                fill='red'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fillRule='evenodd'
                    d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                />
            </svg>
        </div>
    );
>>>>>>> f1e519ed3047316331a78c968c6f2312f16992f0
};

export default AddFavourite;