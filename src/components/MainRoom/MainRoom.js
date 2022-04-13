import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./MainRoom.css";

const MainRoom = (props) => {
  const { id, name, picture, bed, maxPeople, view, wifi, price } = props.room;

  const navigate = useNavigate();
  const onRoomDetails = (id) => {
    navigate(`/rooms/${id}`);
  };

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
        <div className="room-price text-start py-3">
          <h5>
            Start From: <span style={{ color: "#74B7D3" }}>{price}</span>
          </h5>
        </div>
        <Button
          onClick={() => onRoomDetails(id)}
          className="checkDetails-btn mt-2 mt-lg-3"
        >
          Check details
          <i class="fa-solid fa-arrow-right-long"></i>
        </Button>
      </div>
    </div>
  );
};

export default MainRoom;
