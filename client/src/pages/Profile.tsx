import { useState, useEffect } from 'react';
import Auth from '../utils/auth'; // Assuming you have an Auth utility to get user info

const Profile = () => {
  interface User {
    id: string;
    username: string;
    email: string;
  }

  interface Favourite {
    imdbID: string;
    Title: string;
    Poster: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    // Fetch user information from Auth utility or an API
    const fetchUser = async () => {
      const userInfo = await Auth.getUser(); // Replace with your method to get user info
      setUser(userInfo);
    };

    fetchUser();

    // Retrieve favourites from local storage
    const storedFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites') || '[]');
    setFavourites(storedFavourites);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold">Welcome {user.username}!</h1>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <label className="block text-gray-700">Your Favorites:</label>
                <ul>
                  {favourites.map((fav, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <img src={fav.Poster} alt={fav.Title} className="w-16 h-24 object-cover" />
                      <span>{fav.Title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;