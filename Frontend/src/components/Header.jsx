import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authReducer';
import logo from '../assets/images/fincelerate_logo_nav.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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

  const handleProfileClick = async () => {
    const response = await fetch('https://fincelerate.onrender.com/server/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    });
    const data = await response.json();
    if (data.success && data.profile) {
      navigate('/profile/view');
    } else {
      navigate('/profile');
    }
  };

  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900" onClick={closeMenu}>
            <img src={logo} alt="Fincelerate" className="h-10 w-auto" />
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
                  to="/comingsoon"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Explore Funds
                </Link>
              </div>
            )}
          </div>
          <Link to="/eyourself" className="py-2 px-2 w-full text-center md:py-0 md:px-3" onClick={closeMenu} style={{ whiteSpace: 'nowrap' }}>E Yourself</Link>
          <Link to="/contactus" className="py-2 px-2 w-full text-center md:py-0 md:px-3" onClick={closeMenu} style={{ whiteSpace: 'nowrap' }}>Contact Us</Link>
          {isMobile && isAuthenticated && (
            <>
              <button
                onClick={handleProfileClick}
                className="py-2 px-2 w-full text-center md:py-0 md:px-3 bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="py-2 px-2 w-full text-center md:py-0 md:px-3 bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Signout
              </button>
            </>
          )}
          {!isAuthenticated && (
            <Link
              to="/signin"
              className="py-2 px-2 w-full text-center md:py-0 md:px-3 bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={closeMenu}
            >
              Signin
            </Link>
          )}
        </nav>
        {isAuthenticated && !isMobile && (
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleProfileClick}
              className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
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
          </div>
        )}
      </div>
    </header>
  );
}
