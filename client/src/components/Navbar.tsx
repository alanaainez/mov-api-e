import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import MovAPIeLogo from './Logo';

const Navbar = () => {
  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);

  // Function to check if the user is logged in using auth.loggedIn() method
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);  // Set loginCheck to true if user is logged in
    }
  };

  // useEffect hook to run checkLogin() on component mount
  useEffect(() => {
    checkLogin();  // Call checkLogin() function to update loginCheck state
  }, []);  // Empty dependency array ensures useEffect runs only once on mount

  return (
    <nav className="flex justify-between w-fixed w-full flex-shrink flex-grow-0 px-4 items-center py-2 bg-red-900">
      <div className="flex justify-between items-center sticky top-0 p-4 w-full h-full">
      <h1 className="text-white font-bold py-2 px-4 text-2xl" ><Link to='/'><MovAPIeLogo /></Link></h1>
      <div>
        {
          // Conditional rendering based on loginCheck state
          !loginCheck ? (
            // Render login button if user is not logged in
            <button className="bg-orange-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='button'>
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            // Render logout button if user is logged in
            <button className="bg-orange-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='button' onClick={() => {
              auth.logout();  // Call logout() method from auth utility on button click
              setLoginCheck(false);  // Reset loginCheck state to false on logout
            }}>Logout</button>
          )
        }
      </div>
      </div>
    </nav>
  )
}

export default Navbar;