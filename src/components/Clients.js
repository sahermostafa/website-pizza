import React from "react";
import sam from "../imge/bg.jpg"
const Clients = () => {
  return (
    <div className="clients"style={{width: `100%`,padding: `100px 0 `,background: `url(${sam})`,backgroundRepeat:` no-repeat`,backgroundSize: `cover`,color: `#fff`,backgroundAttachment: `fixed`}}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>120</h1>
              <p>Awesome Employees</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>58</h1>
              <p>Pizza Types</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>14868</h1>
              <p>atisfied Clients</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>2031</h1>
              <p>Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
