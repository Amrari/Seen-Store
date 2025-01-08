import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Header.styles.css';
// import logo from "/home/amr/projects/Frontend/Seen-Store/src/seenLogo.jpg";
import UserProfile from "/home/amr/projects/Frontend/Seen-Store/src/seenlogo.webp";
import { ReactComponent as SeenLogo } from "/home/amr/projects/Frontend/Seen-Store/src/assets/SeenLogo.svg";

const Header = ({placeholder, onChangeHandler, className}) => {
  const navigate = useNavigate();
  return (
    <header className="seen-header">
      <div >
      <SeenLogo className="Logo animate" />
      </div>
      <nav className="nav-bar">
      <ul>
      <li>
            <button onClick={() => navigate('/login')} className="login button">
              LogIn
            </button>
          </li>
          <li><button className='favorite button'>Favorite Item</button></li>
          <li><button className='stores button'>Stores</button></li>
          <li><button className='offers button'>Offers</button></li>
      </ul>
      </nav>
      <div><h1 className="app-title">Seen</h1></div>
      <div className="search-bar">
      <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
      </div>
      <div className="user-profile">
        <img src={UserProfile} alt="" />
      </div>
    </header>
  );
}

export default Header;