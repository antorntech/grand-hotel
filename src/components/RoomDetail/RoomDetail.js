import React from "react";
import { useParams } from "react-router-dom";
import "./RoomDetail.css";
import picture from "../../images/room-1.jpg";

const RoomDetail = () => {
  const { roomsId } = useParams();
  return (
    <div className="container my-3 my-lg-5">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <div className="room-banner parent">
            <div className="child">
              <img className="img-fluid" src={picture} alt="" />
            </div>
          </div>
          <div className="card-body d-flex justify-content-between px-3 py-0 pt-4">
            <h6 className="text-start" style={{ color: "#7e6648" }}>
              STANDARD ROOM ONE KING BED
            </h6>
            <h6>Start From: $330 / Night</h6>
          </div>
          <div
            style={{
              borderBottom: "2px solid rgb(154, 162, 168)",
              margin: "15px 10px",
            }}
          ></div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default RoomDetail;
