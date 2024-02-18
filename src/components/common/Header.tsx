import React from "react";
import { Link } from "react-router-dom";
import userProfileLogo from "../../asset/user-profile-svgrepo-com.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={userProfileLogo}
            width={50}
            height={50}
            alt="user-profile"
          />
        </Link>
        <nav className="flex">
          <ul className="flex">
            <li className="ml-4">
              <Link to="/" className="hover:text-gray-400 active:text-blue-700">
                Character
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="/location"
                className="hover:text-gray-400 active:text-blue-700"
              >
                Location
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="/episode"
                className="hover:text-gray-400 active:text-blue-700"
              >
                Episode
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
