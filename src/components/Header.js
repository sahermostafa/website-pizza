import React from "react";
import Navbar from "./Navbar";
import sam from "../imge/bg.jpg"
const Header = () => {
  return (
    <div style={{ width:`100%`,height: `100vh`,background:`url(${sam})`,backgroundSize:`cover`,backgroundPosition:`center`,backgroundAttachment:`fixed`, position: `relative`}} >
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Devlivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
