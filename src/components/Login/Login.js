import React, { useRef } from "react";
import "./Login.css";
import SignInImg from "../../images/signin-up/signin-image.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);

    event.preventDefault();
  };

  return (
    <div className="container my-3 my-lg-5">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <div className="login-banner mb-2 mb-lg-5">
            <img src={SignInImg} alt="" />
          </div>
          <div className="create-account-text">
            <Link to="/signup">create an account</Link>
          </div>
        </div>
        <div className="col text-start px-5">
          <header className="mb-3 mb-lg-4">
            <h2>
              Log- <span style={{ color: "#a0723a" }}>In</span>
            </h2>
          </header>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button className="login-btn" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
