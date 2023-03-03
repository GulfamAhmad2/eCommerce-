import React from "react";
import Pr38 from "../components/assets/img/pr38.png";
import Search from "../components/assets/svg/search.svg";
import Pr36 from "../components/assets/img/pr36.png";
import { Link } from "react-router-dom";
import Chat from "../components/assets/svg/chat.svg";
import Pr17 from "../components/assets/img/pr17.png";
import Pr18 from "../components/assets/img/pr18.png";
import Pr19 from "../components/assets/img/pr19.png";
import Pr20 from "../components/assets/img/pr20.png";
import Pr21 from "../components/assets/img/pr21.png";
import Pr22 from "../components/assets/img/pr22.png";
import Pr23 from "../components/assets/img/pr23.png";
import Pr24 from "../components/assets/img/pr24.png";
import Pr25 from "../components/assets/img/pr25.png";
import Pr26 from "../components/assets/img/pr26.png";
import Pr27 from "../components/assets/img/pr27.png";
import Pr28 from "../components/assets/img/pr28.png";
import Pr29 from "../components/assets/img/pr29.png";
import Pr30 from "../components/assets/img/pr30.png";
import Pr6 from "../components/assets/img/pr6.png";

const SellerProfile = () => {
  return (
    <>
      <div className="seller-profile">
        <div className="seller-profile-background-img">
          <img src={Pr38} />
        </div>
        <div className="pr-search">
          <div className="pr-profile-and-chat">
            <div className="pr-profile">
              <div className="pr-profile-img">
                <img src={Pr36} />
              </div>
              <Link to="/sellerProfile">
                <span className="pr-profile-name">Mouse Elit</span>
              </Link>
            </div>
            <div className="pr-chat">
              <Link to="/chat" className="pr-chat-btn">
                <img src={Chat} />
                <span className="pr-chat-btn-text">Chat</span>
              </Link>
            </div>
          </div>
          <div className="seller-profile-pr-search">
            <input type="search" placeholder="Search product in this shop"/>
            <img src={Search} />
          </div>
        </div>

        <div className="products-list-con">
          <div className="left-con">
            <div className="check-filter">
              <div className="check-filter-heading">
                <h3>Brand</h3>
              </div>
              <div className="check-filter-check-boxes">
                <div className="check-filter-check-box">
                  <input type="checkbox" id="checkbox1" />
                  <label className="checkbox-text" htmlFor="checkbox1">
                    Dell
                  </label>
                </div>

                <div className="check-filter-check-box">
                  <input type="checkbox" id="checkbox2" />
                  <label className="checkbox-text" htmlFor="checkbox2">
                    Dynabook
                  </label>
                </div>

                <div className="check-filter-check-box">
                  <input type="checkbox" id="checkbox3" />
                  <label className="checkbox-text" htmlFor="checkbox3">
                    logitech
                  </label>
                </div>

                <div className="check-filter-check-box">
                  <input type="checkbox" id="checkbox4" />
                  <label className="checkbox-text" htmlFor="checkbox4">
                    rapoo
                  </label>
                </div>

                <div className="check-filter-check-box">
                  <input type="checkbox" id="checkbox5" />
                  <label className="checkbox-text" htmlFor="checkbox5">
                    reddragon
                  </label>
                </div>

                <div className="check-filter-check-box">
                  <input type="checkbox" id="checkbox6" />
                  <label className="checkbox-text" htmlFor="checkbox6">
                    rexus
                  </label>
                </div>
              </div>
              <div className="show-more-btn">
                <button>Show more</button>
              </div>
            </div>
          </div>
          <div className="right-con">
            <div className="sort">
              <div className="sort-con">
                <label>Sort</label>
                <select>
                  <option>Related</option>
                  <option>Max Price</option>
                  <option>Low Price</option>
                </select>
              </div>
            </div>
            <div className="products-con">
              <div className="cards latest-product-card">
                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr17} />
                  </div>

                  <p className="pr-name">
                    Dynabook T120 Silent Bluetooth Mouse - Black
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$13.58</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr18} />
                  </div>

                  <p className="pr-name">
                    Logitech POP Wireless Mouse with Emoji Button Function -
                    Yellow
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$25.05</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr19} />
                  </div>

                  <p className="pr-name">
                    LOGITECH MX Master 2S Wireless Mouse
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$83.44</button>
                    <span className="discount">disc.9%</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr20} />
                  </div>
                  <p className="pr-name">LOGITECH Pop Mouse</p>
                  <div className="pr-btn">
                    <button className="price-btn">$24.29</button>
                    <span className="discount">disc.3%</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr21} />
                  </div>
                  <p className="pr-name">
                    Rexus Q20 Silent Click Wireless Mouse for Office & Home
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$3.38</button>
                    <span className="discount">disc.50%</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr22} />
                  </div>
                  <p className="pr-name">
                    Logitech Pebble Wireless Mouse M350 - Pink White Black
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$20.41</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr23} />
                  </div>
                  <p className="pr-name">
                    RAPOO Wireless Optical Mouse M10 Plus
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$7.06</button>
                    <span className="discount">disc.11%</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr24} />
                  </div>
                  <p className="pr-name">
                    LOGITECH Signature M650 Wireless Mouse
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$25.19</button>
                    <span className="discount">disc.38%</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr25} />
                  </div>
                  <p className="pr-name">LOGITECH M190 Wireless Mouse</p>
                  <div className="pr-btn">
                    <button className="price-btn">$14.47</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr26} />
                  </div>
                  <p className="pr-name">DELL Optical Mouse MS116</p>
                  <div className="pr-btn">
                    <button className="price-btn">$10.34</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr27} />
                  </div>
                  <p className="pr-name">
                    RAPOO Multi Mode Wireless Mouse Silence M300 Silent
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$948.26</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr28} />
                  </div>
                  <p className="pr-name">
                    HP Pavilion x360 Convertible 14-dy0063TU
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$14.85</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr29} />
                  </div>
                  <p className="pr-name">
                    LOGITECH Wired Optical Mouse M105 - White
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$5.29</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr30} />
                  </div>
                  <p className="pr-name">LOGITECH M190 Wireless Mouse</p>
                  <div className="pr-btn">
                    <button className="price-btn">$14.47</button>
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-img">
                    <img src={Pr6} />
                  </div>
                  <p className="pr-name">
                    Redragon M991-RGB Wireless Gaming Mouse RGB ENLIGHTMENT
                  </p>
                  <div className="pr-btn">
                    <button className="price-btn">$45.76</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
