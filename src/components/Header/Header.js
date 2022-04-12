import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="container-fluid box-shadow py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <nav className="d-flex">
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/rooms">Rooms</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
