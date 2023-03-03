import React from "react";
import { Link } from "react-router-dom";
import Hamberger from "../components/assets/svg/hamberger.svg";
import Search from "../components/assets/svg/search.svg";
import Cart from "../components/assets/svg/cart.svg";
import Profile from "../components/assets/svg/profile.svg";
// import Chat from "./assets/svg/chat.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <nav className="nav-section">
          {/* ============= Hamberger ============= */}
          <div className="hamberger">
            <img
              src={Hamberger}
              alt="Hamberger-icon"
              className="Hamberger-icon"
            />
          </div>

          {/* ============= Logo ============= */}
          <div className="logo">
            <Link to="/">
              Chom<span className="logo-style">erce</span>
            </Link>
          </div>

          {/* ============= Middle ============= */}
          <div className="middle">
            <div className="search-bar">
              <input type="search" placeholder="Search for anything" />
              <img src={Search} alt="search-icon" className="search-icon" />
            </div>
            <div className="middle-link">
              <Link to="/login" className="login-link">
                SignIn
              </Link>

              <Link to="/profile/asdf" className="profile-link">
                <img src={Profile} alt="profile-icon" />
              </Link>

              {/* <Link to="/chat" className="chat-link">
                <img src={Chat} />
              </Link> */}
            </div>
          </div>

          {/* ============= Cart ============= */}
          <Link to="/cart" className="cart-link">
            <span className="qty"></span>
            <img src={Cart} alt="cart-icon" />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
