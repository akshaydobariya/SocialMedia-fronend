import React, { useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { LoginValidation } from "../Validation/Validation";
import { useDispatch, useSelector } from "react-redux";
import { login_Api } from "../ApiCalling/Account";
import { clearErrorMessage } from "../Store/Slice/AccountSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage, loginData } = useSelector((state) => state.account);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      dispatch(clearErrorMessage());
      dispatch(login_Api(values));
    },
  });

  useEffect(() => {
    if (loginData != null) {
      navigate("/home");
    }
  }, [loginData]);
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow" style={{ backgroundColor: "#f2f2f2" }}>
              <Card.Body>
                <h2 className="fw-bold mb-4 text-uppercase text-center">
                  Sign-In
                </h2>
                <p
                  className={
                    errorMessage === "" ? "mb-5" : "mb-5 text-danger fs-5"
                  }
                >
                  {errorMessage === ""
                    ? "Please enter your Login information."
                    : errorMessage}
                </p>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="email"
                      data-testid="email-input"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-danger">{formik.errors.email}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="password"
                      data-testid="password-input"
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    )}
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      variant="success"
                      type="submit"
                      data-testid="login-button"
                    >
                      Login
                    </Button>
                  </div>
                  <p className="small mt-3 text-center">
                    <a href="#!" className="text-primary">
                      Forgot password?
                    </a>
                  </p>
                </Form>
                <p className="mt-3 mb-0 text-center">
                  Don't have an account?{" "}
                  <Link to={"/signup"} className="text-success fw-bold">
                    Sign Up
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
