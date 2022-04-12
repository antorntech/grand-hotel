import React from "react";
import useRooms from "../../hooks/useRooms";
import Room from "../Room/Room";
import "./Rooms.css";

const Rooms = () => {
  const [rooms, setRooms] = useRooms();
  return (
    <div className="container my-3 my-lg-5">
      <header className="mb-3 mb-lg-5">
        <h1 style={{ fontSize: "40px" }}>
          Check <span style={{ color: "#7e6648" }}>Room</span>
        </h1>
        <div
          className="mx-auto"
          style={{ borderBottom: "3px solid #7e6648", width: "150px" }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3 gy-3 gy-lg-5">
        {rooms.map((room) => (
          <Room key={room.id} room={room}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
