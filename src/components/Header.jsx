import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="fixed z-40 w-full bg-blue-500 py-2 px-2 lg:px-6 flex items-center justify-between">
      <Link to="/" className="text-2xl font-extrabold text-white">
        TrackOpp
      </Link>
      <Link
        to="/applications"
        className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
      >
        Applications
      </Link>
    </div>
  );
};

export default Header;
