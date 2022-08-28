import React from "react";

import Product from "../Product/Product";
import "./Home.css";
import products from "../../Constants/Products";
import AMAZON_HOME_PAGE from "../../Assets/amazon_home_image.jpg";

function Home() {
  let firstRowItems = products.filter((item) => item.row === 1);
  let secondRowItems = products.filter((item) => item.row === 2);
  let thirdRowItems = products.filter((item) => item.row === 3);

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={AMAZON_HOME_PAGE} alt="" />

        <div className="home__row">
          {firstRowItems.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>

        <div className="home__row">
          {secondRowItems.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>

        <div className="home__row">
          {thirdRowItems.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
