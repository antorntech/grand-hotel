import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import SignUpImg from "../../images/signin-up/signup-image.jpg";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }

  const handleSubmitForm = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      document.getElementById("error").style.display = "block";
    } else {
      createUserWithEmailAndPassword(email, password);
    }

    event.preventDefault();
  };

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
          <Form onSubmit={handleSubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                ref={confirmPasswordRef}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <p id="error" style={{ color: "red", display: "none" }}>
              Password don't match.
            </p>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree all statements" />
            </Form.Group>
            <Button className="signUp-btn" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
