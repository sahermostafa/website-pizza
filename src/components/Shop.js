import React from "react";
import sam from "../imge/bg.jpg"
const Shop = () => {
  return (
    <div style={{ width:`100%`,height: `450px`,background:`url(${sam})`, backgroundAttachment: `fixed`}} >
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery With PIZZA OF THE DAY Only 8.99 USD</h1>
            <div className="shop__btn">
              <a href="" className="btn btn-smart">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
