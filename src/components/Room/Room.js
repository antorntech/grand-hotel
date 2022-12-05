import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Room.css";
import { motion } from "framer-motion"

const Room = (props) => {
  const { id, name, picture } = props.room;
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
        <Button
          onClick={() => onRoomDetails(id)}
          className="checkDetails-btn mt-2 mt-lg-3"
        >
          <motion.div whileHover={{scale: 1.1}} transition={{duration: .4}} style={{width: '100%'}}>
            <span>Check details</span>
            <i class="fa-solid fa-arrow-right-long ms-1"></i>
          </motion.div>
        </Button>
      </div>
    </div>
  );
};

export default Room;
