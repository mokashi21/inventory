import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "white",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            ></div>
            Inventory Management System
           
          </a>
          <div className=" collapse navbar-collapse justify-content-end  ">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
