import React from "react";
import Camera from "../components/assets/svg/camera.svg";
import Console from "../components/assets/svg/console.svg";
import Cpu from "../components/assets/svg/cpu.svg";
import Gadget from "../components/assets/svg/gadget.svg";
import Accessoris from "../components/assets/svg/accessoris.svg";
import Hardisk from "../components/assets/svg/hardisk.svg";
import Mouse from "../components/assets/svg/mouse.svg";
import Tv from "../components/assets/svg/tv.svg";
import Router from "../components/assets/svg/router.svg";
import Pr1 from "../components/assets/img/pr1.png";
import Pr2 from "../components/assets/img/pr2.png";
import Pr3 from "../components/assets/img/pr3.png";
import Pr4 from "../components/assets/img/pr4.png";
import Pr5 from "../components/assets/img/pr5.png";
import Pr6 from "../components/assets/img/pr6.png";
import Pr7 from "../components/assets/img/pr7.png";
import Pr8 from "../components/assets/img/pr8.png";
import Pr9 from "../components/assets/img/pr9.png";
import Pr10 from "../components/assets/img/pr10.png";
import Pr11 from "../components/assets/img/pr11.png";
import Pr12 from "../components/assets/img/pr12.png";
import Pr13 from "../components/assets/img/pr13.png";
import Pr14 from "../components/assets/img/pr14.png";
import Pr15 from "../components/assets/img/pr15.png";
import Pr16 from "../components/assets/img/pr16.png";
import Star1 from "../components/assets/svg/star1.svg";
import Star2 from "../components/assets/svg/star2.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="products-list-container">
          <div className="products-list-btn">
            <button>Lists</button>
          </div>
          <div className="products-list">
            <Link to="/productList">
              <div className="product-icon">
                <img src={Camera} className="icon" />
                <span>Camera</span>
              </div>
            </Link>
            <Link to="/productList">
              <div className="product-icon">
                <img src={Console} className="icon" />
                <span>Console</span>
              </div>
            </Link>
            <Link to="/productList">
              <div className="product-icon">
                <img src={Cpu} className="icon" />
                <span>Cpu</span>
              </div>
            </Link>
            <Link to="/productList">
              <div className="product-icon">
                <img src={Gadget} className="icon" />
                <span>Gadget</span>
              </div>
            </Link>
            <Link to="/productList">
              <div className="product-icon">
                <img src={Accessoris} className="icon" />
                <span>Accessoris</span>
              </div>
            </Link>
            <Link to="/productList">
              <div className="product-icon">
                <img src={Hardisk} className="icon" />
                <span>Hardisk</span>
              </div>
            </Link>
            <Link to="/productList">
              <div className="product-icon">
                <img src={Mouse} className="icon" />
                <span>Mouse</span>
              </div>
            </Link>
            <Link to="/productList">
              <div className="product-icon">
                <img src={Tv} className="icon" />
                <span>Tv</span>
              </div>
            </Link>
            <Link to="/productList">
              <div className="product-icon">
                <img src={Router} className="icon" />
                <span>Router</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="home">
          <div className="cards">
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr1} />
                </div>

                <p className="pr-name">
                  PS4 OP Stick Bonus USB Charge Cable White
                </p>
                <div className="pr-btn">
                  <button className="price-btn">$25.87</button>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr2} />
                </div>

                <p className="pr-name">
                  Hippo Ilo W2 Powerbank wireless 10000mah
                </p>
                <div className="pr-btn">
                  <button className="price-btn">$32.50</button>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr3} />
                </div>

                <p className="pr-name">ASUS ExpertBook B1400CEAE-EK3424T</p>
                <div className="pr-btn">
                  <button className="price-btn">$527.66</button>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr4} />
                </div>

                <p className="pr-name">SAMSUNG Galaxy A03</p>
                <div className="pr-btn">
                  <button className="price-btn">$118.60</button>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr5} />
                </div>

                <p className="pr-name">SAMSUNG 32 Inch TV LED UA32T4003</p>
                <div className="pr-btn">
                  <button className="price-btn">$188.55</button>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr6} />
                </div>

                <p className="pr-name">LOGITECH Pop Mouse</p>
                <div className="pr-btn">
                  <button className="price-btn">$24.29</button>
                  <span className="discount">disc.2%</span>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr7} />
                </div>

                <p className="pr-name">ACER All-In-One Aspire C24-1650</p>
                <div className="pr-btn">
                  <button className="price-btn">$577.20</button>
                  <span className="discount">disc.3%</span>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr8} />
                </div>

                <p className="pr-name">TP-LINK Archer AX73 Router</p>
                <div className="pr-btn">
                  <button className="price-btn">$116.61</button>
                  <span className="discount">disc.17%</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <section>
        <div className="trend-products">
          <div className="trend-text">
            <span className="most-popular">Most popular items</span>
            <span className="most-trend">Most popular items</span>
          </div>
          <div className="cards trend-cards">
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img trend-img">
                  <img src={Pr9} />
                </div>

                <p className="pr-name">Realme C20</p>
                <div className="pr-btn">
                  <button className="price-btn">$ 165</button>
                  <span className="discount">disc.5%</span>
                </div>
                <div className="stars">
                  <div className="star">
                    <img src={Star1} />
                    <img src={Star1} />
                    <img src={Star1} />
                    <img src={Star1} />
                    <img src={Star1} />
                  </div>
                  <div className="star-text">
                    <span className="star-span">(10,270)</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img trend-img">
                  <img src={Pr10} />
                </div>

                <p className="pr-name">Monitor 24'' IPS Full</p>
                <div className="pr-btn">
                  <button className="price-btn">$ 240</button>
                  <span className="discount">disc.12%</span>
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
                    <span className="star-span">(8,531)</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img trend-img">
                  <img src={Pr11} />
                </div>

                <p className="pr-name">External Case HDD 2.5" USB 2.0 Inch</p>
                <div className="pr-btn">
                  <button className="price-btn">$ 2</button>
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
                    <span className="star-span">(1,232)</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img trend-img">
                  <img src={Pr12} />
                </div>

                <p className="pr-name">Seagate 2tb External Hard Drive</p>
                <div className="pr-btn">
                  <button className="price-btn">$ 55.72</button>
                  <span className="discount">disc.15%</span>
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
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="latest-products">
        <div className="latest-product">
          <h2 className="latest-product-heading">Latest Product</h2>
          <div className="cards latest-product-card">
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr13} />
                </div>

                <p className="pr-name">HDC 11 Promax 64Gb</p>
                <div className="pr-btn">
                  <button className="price-btn">$343.57</button>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr14} />
                </div>
                <p className="pr-name">FUJIFILM Instax Mini 11 Camera</p>
                <div className="pr-btn">
                  <button className="price-btn">$83.14</button>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr15} />
                </div>

                <p className="pr-name">
                  SONY Alpha a7 III Mirrorless with FE 28-70mm Lens + microSD
                  128GB
                </p>
                <div className="pr-btn">
                  <button className="price-btn">$2218.79</button>
                </div>
              </div>
            </Link>
            <Link to="/singleProduct">
              <div className="product-card">
                <div className="card-img">
                  <img src={Pr16} />
                </div>
                <p className="pr-name">
                  HP Pavilion x360 Convertible 14-dy0063TU
                </p>
                <div className="pr-btn">
                  <button className="price-btn">$948.26</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
