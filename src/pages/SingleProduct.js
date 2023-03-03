import React from "react";
import Pr6 from "../components/assets/img/pr6.png";
import Pr31 from "../components/assets/img/pr31.png";
import Pr32 from "../components/assets/img/pr32.png";
import Pr33 from "../components/assets/img/pr33.png";
import Pr34 from "../components/assets/img/pr34.png";
import Pr35 from "../components/assets/img/pr35.png";
import Pr36 from "../components/assets/img/pr36.png";
import Inc from "../components/assets/svg/inc.svg";
import Dec from "../components/assets/svg/dec.svg";
import Star1 from "../components/assets/svg/star1.svg";
import Star2 from "../components/assets/svg/star2.svg";
import Chat from "../components/assets/svg/chat.svg";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <>
      <div className="single-pro-containers">
        <div className="single-pro-cont-1">
          <div className="single-pro-images">
            <div className="single-pro-main-image">
              <img src={Pr6} />
            </div>
            <div className="single-pro-small-images">
              <div className="small-image">
                <img src={Pr6} />
              </div>

              <div className="small-image">
                <img src={Pr31} />
              </div>

              <div className="small-image">
                <img src={Pr32} />
              </div>

              <div className="small-image">
                <img src={Pr33} />
              </div>

              <div className="small-image">
                <img src={Pr34} />
              </div>

              <div className="small-image">
                <img src={Pr35} />
              </div>
            </div>
          </div>
          <div className="product-details">
            <div className="product-details-heading">
              <h3>Logitech Pop Mouse</h3>
            </div>
            <div className="stars">
              <div className="star">
                <img src={Star1} />
                <img src={Star1} />
                <img src={Star1} />
                <img src={Star1} />
                <img src={Star2} />
              </div>
              <div className="star-text">
                <span className="star-span">(128)</span>
              </div>
            </div>
            <div className="pr-btn single-pr-price">
              <span className="price-btn single-pr">$ 55.72</span>
              <span className="discount single-pr-discount">disc.3%</span>
            </div>
            <div className="buy-and-add-to-cart">
              <button className="buy-btn">Buy</button>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
            <div className="inc-dec">
              <img src={Inc} />
              <span className="inc-num">1</span>
              <img src={Dec} />
            </div>
            <div className="pr-profile-and-chat">
              <div className="pr-profile">
                <div className="pr-profile-img">
                  <img src={Pr36} />
                </div>
                <Link to='/sellerProfile'>
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
          </div>
        </div>
        <div className="product-description">
          <div className="product-dec">
            <h3 className="product-dec-heading">Desc</h3>
            <ul>
              <li>Wireless Mouse (Bluetooth 5.1)</li>
              <li>
                Sensor technology: Logitech High Precision Optical Tracking
              </li>
              <li>Dpi range: 1000-4000; nominal value 1000 dpi</li>
              <li>4 buttons</li>
              <li>Battery type: 1 x AA battery</li>
              <li>Main Unit</li>
            </ul>
          </div>
          <div className="product-dec specs">
            <h3 className="product-dec-heading">Specs</h3>
            <span>Bluetooth: Connectivity</span>
            <span>Product Dimensions: 59.4 x 35.2 x 104.8 mm (WxDxH)</span>
            <span>Operating System Compatibility:</span>
            <ul>
              <li>Windows®︎ 10.11 or later</li>
              <li>macOS 10.15 or later</li>
              <li>Chrome OS</li>
              <li>iPadOS 13.4 or later</li>
              <li>Works with Microsoft Surface</li>
            </ul>
            <span className="product-dec-heading specs-heading">Etc</span>
            <ul>
              <li>
                Sensor technology: Logitech High Precision Optical Tracking
              </li>
              <li>Dpi range: 1000-4000, nominal value 1000 dpi</li>
              <li>
                Number of buttons: 4 (Left/Right-click, Scroll-wheel with middle
                click, top button)
              </li>
              <li>Top button customizable with Emoji Software</li>
              <li>
                Multi-device: 3 Easy-Switch™ channels On/Off Switch with
                power-saving technology
              </li>
              <li>Product Weight 82 grams (with batteries)</li>
            </ul>
          </div>
          <div className="product-reviews">
            <div className="pr-review">
              <h3 className="pr-review-heading">Review</h3>
              <div className="stars pr-review-star">
                <div className="star">
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star2} />
                </div>
                <div className="star-text">
                  <span className="star-span">(2)</span>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="user-review">
                <div className="name-date">
                  <span className="user-name">Mehdi</span>
                  <span className="time">13 May 2022</span>
                </div>
                <div className="star user-review-star">
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star2} />
                </div>
                <p className="user-message">
                  Mini design, light weight, smooth trackball.
                </p>
              </div>

              <div className="user-review">
                <div className="name-date">
                  <span className="user-name">Mehdi</span>
                  <span className="time">13 May 202</span>
                </div>
                <div className="star user-review-star">
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star1} />
                  <img src={Star2} />
                </div>
                <p className="user-message">
                  Mini design, light weight, smooth trackball.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
