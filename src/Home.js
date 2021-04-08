import React from "react";
import "./Home.css";
import img from "./clone.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={img} alt=""></img>

        <div className="home-row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Kenwood kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="4903850"
            title="ANYCUBIC MEGA X 3D Printer, Large Metal FDM 3D Printer with Patented Heatbed and 1kg PLA Filament, Build Size 11.81in(L) x 11.81in(W) x 12in(H)"
            price={509.99}
            rating={4}
            image="https://www.amazon.ca/images/I/71gUhesFJ3L._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Sony Wireless Industry Leading Noise Canceling Overhead Headphones, Black"
            price={498.0}
            rating={4}
            image="https://www.amazon.ca/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD | 2019 release"
            price={119.99}
            rating={3}
            image="https://www.amazon.ca/images/I/415eDd-iH9L._AC_SL1000_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="90829332"
            title="Samsung 50' TU7000 4K Ultra HD HDR Smart TV (UN50TU7000FXZC)"
            price={598.0}
            rating={5}
            image="https://www.amazon.ca/images/I/91-gHZ%2BX9YL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
