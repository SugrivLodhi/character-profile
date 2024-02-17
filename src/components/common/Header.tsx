import React from "react";
import { Link } from "react-router-dom";
import SearchFiled from "./SearchFiled";
import userProfileLogo from "../../asset/user-profile-svgrepo-com.svg"
const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={userProfileLogo} width={50} height={50} alt="user-profile"/>
        </Link>
         <SearchFiled/>
        <nav className="flex">
          <ul className="flex">
            <li className="ml-4">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="ml-4">
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li className="ml-4">
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;