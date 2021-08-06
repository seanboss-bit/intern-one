import React, { useState } from "react";
import Summary from "./Summary";

const DashBoard = () => {
  let [count, setCount] = useState(1);
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="container">
          <div className="nav-bar">
            <div className="bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="links">
            <div
              onClick={() => {
                setCount((count = 1));
              }}
            >
              <i className="far fa-clipboard"></i>
              <span>Dashboard</span>
            </div>
            <div
              onClick={() => {
                setCount((count = 2));
              }}
            >
              <i className="fas fa-users"></i> <span>Enrolles</span>
            </div>
            <div
              onClick={() => {
                setCount((count = 3));
              }}
            >
              <i className="fas fa-warehouse"></i>
              <span>Facilities</span>
            </div>
            <div
              onClick={() => {
                setCount((count = 4));
              }}
            >
              <i className="far fa-handshake"></i>
              <span>Encounters</span>
            </div>
          </div>
        </div>
      </nav>
      <section className="body">
        {count === 1 ? (
          <div className="dashboard-content">
            <Summary />
          </div>
        ) : null}
        {count === 2 ? (
          <div>
            <h1>Welcome from count 2</h1>
          </div>
        ) : null}
        {count === 3 ? (
          <div>
            <h1>Welcome from count 3</h1>
          </div>
        ) : null}
        {count === 4 ? (
          <div>
            <h1>Welcome from count 4</h1>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default DashBoard;
