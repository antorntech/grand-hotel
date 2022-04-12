import React from "react";
import { Link } from "react-router-dom";
import "./MainRoom.css";

const MainRoom = (props) => {
  const { name, picture, bed, maxPeople, view, wifi, price } = props.room;
  return (
    <div className="col">
      <div className="card h-100">
        <div className="room-banner parent">
          <div className="child">
            <img className="img-fluid" src={picture} alt="" />
          </div>
        </div>
        <div className="card-body px-3 py-0 pt-4">
          <h6 className="text-start" style={{ color: "#7e6648" }}>
            {name}
          </h6>
        </div>
        <div
          style={{
            borderBottom: "2px solid rgb(154, 162, 168)",
            margin: "15px 10px",
          }}
        ></div>
        <div className="card-list">
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: "5px",
                    color: "rgb(154, 162, 168)",
                  }}
                >
                  Bed
                </span>
                {bed}
              </span>
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: "5px",
                    color: "rgb(154, 162, 168)",
                  }}
                >
                  Max People
                </span>
                {maxPeople}
              </span>
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: "5px",
                    color: "rgb(154, 162, 168)",
                  }}
                >
                  View
                </span>
                {view}
              </span>
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: "5px",
                    color: "rgb(154, 162, 168)",
                  }}
                >
                  Wifi
                </span>
                {wifi}
              </span>
            </li>
          </ul>
        </div>
        <Link className="text-start pb-4 details-btn" to="#">
          <span className="text-start">
            Check details <i class="fa-solid fa-arrow-right-long"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainRoom;
