import React from "react";
import { Link } from "react-router-dom";
import "./Room.css";

const Room = (props) => {
  const { id, name, picture } = props.room;
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
        <Link className="text-start pb-4" to="#">
          Check details
          <i class="fa-solid fa-arrow-right-long"></i>
        </Link>
      </div>
    </div>
  );
};

export default Room;
