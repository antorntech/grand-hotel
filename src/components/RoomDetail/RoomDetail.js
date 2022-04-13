import React from "react";
import { Link, useParams } from "react-router-dom";
import "./RoomDetail.css";
import picture from "../../images/room-1.jpg";
import { Form } from "react-bootstrap";

const RoomDetail = () => {
  const { roomsId } = useParams();
  return (
    <div className="container my-3 my-lg-5">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col col-lg-8">
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
        <div className="col col-lg-4">
          <div className="reservationForm px-4">
            <div className="row">
              <div className="col">
                <div className="row mt-3">
                  <header className="mb-2">
                    <h3 className="text-white">Your Reservation</h3>
                  </header>
                  <hr />
                  <div className="col text-start">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: "#fff" }}>
                          Check in
                        </Form.Label>
                        <Form.Control id="date" type="date" name="date" />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col text-start">
                    <span style={{ color: "#fff" }}>Rooms</span>
                    <div className="custom-select">
                      <select className="selectOption">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col text-start">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff" }}>Check Out</Form.Label>
                    <Form.Control id="date" type="date" name="date" />
                  </Form.Group>
                </Form>
              </div>
              <div className="col"></div>
            </div>
            <div className="row pt-5">
              <div className="col">
                <Link id="roomBooking" to="/room_booking">
                  Room Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
