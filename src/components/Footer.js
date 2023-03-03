import React from 'react'
import Headphone from "../components/assets/svg/headphone.svg";
import Call from "../components/assets/svg/call.svg";
import Playstore from "../components/assets/svg/playstore.svg";
import Applestore from "../components/assets/svg/apple.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <div className="footer">
          <div className="top-div">
            <div className="div-1">
              <div className="div-heading">
                <h6>APPLICATION</h6>
              </div>
              <div className="div-content">
                <button className="app-btn">
                  <img src={Playstore} />
                  <div className="app-text">
                    <span className="app-text-1">Get it now</span>
                    <span className="app-text-2">Google Play</span>
                  </div>
                </button>
                <button className="app-btn">
                  <img src={Applestore} />
                  <div className="app-text">
                    <span className="app-text-1">Download on the</span>
                    <span className="app-text-2">App Store</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="div-2">
              <div className="div-heading">
                <h6>CHOMERCE</h6>
              </div>
              <div className="footer-links">
                <Link to="#">About us</Link>
                <Link to="#">Blog</Link>
                <Link to="#">Site Map</Link>
                <Link to="#">Karir</Link>
                <Link to="#">Akun</Link>
              </div>
            </div>
            <div className="div-3">
              <div className="div-heading">
                <h6>SERVICE INFORMATION</h6>
              </div>
              <div className="footer-links">
                <Link to="#">Return of goods</Link>
                <Link to="#">Service and After Sales</Link>
                <Link to="#">Terms and conditions</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Store Location</Link>
              </div>
            </div>
            <div className="div-4">
              <div className="div-heading">
                <img src={Headphone} />
                <h6>CUSTOMER SERVICE</h6>
              </div>
              <div className="footer-links">
                <div className="tel-number">
                  <img src={Call} />
                  <span className="">+84707707654</span>
                </div>
                <div className="tel-number">
                  <img src={Call} />
                  <span className="">+84707707654</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-div">
            <div className="footer-logo">
              <Link to="/">
                Chom<span className="footer-style">erce</span>
              </Link>
            </div>
            <span className="copy-right">© 2022 All Rights Reserved</span>
          </div>
        </div>
      </footer>
  )
}

export default Footer