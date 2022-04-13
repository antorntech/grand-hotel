import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpImg from "../../images/signin-up/signup-image.jpg";

const SignUp = () => {
  return (
    <div className="container my-3 my-lg-5">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <div className="login-banner mb-2 mb-lg-5">
            <img src={SignUpImg} alt="" />
          </div>
          <div className="create-account-text">
            <Link to="/login">Already have an account</Link>
          </div>
        </div>
        <div className="col text-start px-5">
          <header className="mb-3 mb-lg-4">
            <h2>
              Sign- <span style={{ color: "#a0723a" }}>Up</span>
            </h2>
          </header>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree all statements" />
            </Form.Group>
            <Button className="login-btn" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
