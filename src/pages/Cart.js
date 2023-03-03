import React from "react";
import Pr6 from "../components/assets/img/pr6.png";
import Inc from "../components/assets/svg/inc.svg";
import Dec from "../components/assets/svg/dec.svg";
const Cart = () => {
  return (
    <>
      <div className="cart-container">
        <div className="cart-container-heading">
          <h3>Shop cart</h3>
        </div>
        <div className="cart-con">
          <div className="cart-card">
            <div className="product-cart-container">
              <div className="pr-cart-checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="pr-cart-image">
                <img src={Pr6} />
              </div>
              <div className="pr-cart-details">
                <span className="pr-cart-name">LOGITECH Pop Mouse</span>
                <div className="pr-cart-price-inc-dic">
                  <span className="pr-cart-price">$ 55.72</span>
                  <div className="inc-dec pr-cart-inc-dec">
                    <img src={Inc} />
                    <span className="inc-num pr-cart-counter">1</span>
                    <img src={Dec} />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-cart-container">
              <div className="pr-cart-checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="pr-cart-image">
                <img src={Pr6} />
              </div>
              <div className="pr-cart-details">
                <span className="pr-cart-name">LOGITECH Pop Mouse</span>
                <div className="pr-cart-price-inc-dic">
                  <span className="pr-cart-price">$ 55.72</span>
                  <div className="inc-dec pr-cart-inc-dec">
                    <img src={Inc} />
                    <span className="inc-num pr-cart-counter">1</span>
                    <img src={Dec} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="total-price-container">
            <span className="pr-cart-price">$ 55.72</span>
            <button className="total-price-proceed">Proceed to payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
