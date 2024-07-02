import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authReducer';
import logo from '../assets/images/Fincelerate Final logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Dispatch logout action
    dispatch(logout());
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900" onClick={closeMenu}>
            <img src={logo} alt="Fincelerate" className="h-8 w-auto" />
            <span className="ml-3 text-xl">Fincelerate</span>
          </Link>
        </div>
        <button
          className="md:hidden flex items-center text-gray-900"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <nav
          className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center text-base justify-center absolute md:static top-full right-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <Link to="/about" className="py-2 px-2 w-full text-center md:py-0 md:px-3" onClick={closeMenu}>About Us</Link>
          <Link to="/eyourself" className="py-2 px-2 w-full text-center md:py-0 md:px-3" onClick={closeMenu} style={{ whiteSpace: 'nowrap' }}>E Yourself</Link>
          <div className="relative">
            <button
              className="py-2 px-2 w-full text-center md:py-0 md:px-3 flex items-center justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ whiteSpace: 'nowrap' }}
            >
              Mutual Funds
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-20">
                <Link
                  to="/calculators"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Calculators
                </Link>
                <Link
                  to="/goals"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Goals
                </Link>
                <Link
                  to="/invest"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Invest
                </Link>
                <Link
                  to="/explore-funds"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Explore Funds
                </Link>
              </div>
            )}
          </div>
          <Link to="/contactus" className="py-2 px-2 w-full text-center md:py-0 md:px-3" onClick={closeMenu} style={{ whiteSpace: 'nowrap' }}>Contact Us</Link>
        </nav>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Signout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        ) : (
          <Link
            to="/signin"
            className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={closeMenu}
          >
            Signin
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
}
