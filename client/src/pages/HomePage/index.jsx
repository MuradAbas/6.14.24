import "./index.scss";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

const { Meta } = Card;
const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Watch Shop | Ecommerce</title>
      </Helmet>
      <div id="home-page">
        <div className="home-page">
          <section id="banner">
            <div className="banner">
              <div className="container">
                <div className="content">
                  <h1>Select Your New Perfect Style</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore corporis placeat reiciendis magnam dolorum ipsam,
                    excepturi aliquam laudantium cum aperiam! Laudantium ullam
                    quas, officia sapiente doloribus vel et nisi soluta.
                  </p>
                  <button className="show">Shop Now</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;