import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { SignUpValidation } from "../Validation/Validation";
import FormGroup from "../common/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { Register_Api } from "../ApiCalling/Account";
import { useNavigate, Link } from "react-router-dom";
import {
  clearErrorMessage,
  clearRegisterData,
} from "../Store/Slice/AccountSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerData, errorMessage } = useSelector((state) => state.account);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      UserName: "",
      Name: "",
      City: "",
      profileImage: null,
    },
    validationSchema: SignUpValidation,
    onSubmit: async (values, actions) => {
      await dispatch(clearErrorMessage());

      const formData = new FormData();
      formData.append("Email", values.email);
      formData.append("Password", values.password);
      formData.append("ConfirmPassword", values.confirmPassword);
      formData.append("UserName", values.UserName);
      formData.append("Name", values.Name);
      formData.append("City", values.City);
      formData.append("Image", values.profileImage);

      await dispatch(Register_Api(formData));
      actions.resetForm();
    },
  });

  useEffect(() => {
    if (registerData === "User successfully created!") {
      navigate("/");
      dispatch(clearRegisterData());
    }
  }, [registerData]);

  const { values, handleChange, handleBlur, touched, errors, setFieldValue } =
    formik;

  const handleImageChange = (event) => {
    setFieldValue("profileImage", event.currentTarget.files[0]);
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase">Sign-Up</h2>
                <p
                  className={
                    errorMessage === "" ? "mb-5" : "mb-5 text-danger fs-5"
                  }
                >
                  {errorMessage === ""
                    ? "Please enter your registration information."
                    : errorMessage}
                </p>
                <Form onSubmit={formik.handleSubmit}>
                  <FormGroup
                    controlId="formBasicEmail"
                    label="Email address"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                  />

                  <FormGroup
                    controlId="formBasicUserName"
                    label="User Name"
                    name="UserName"
                    type="text"
                    value={values.UserName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.UserName && errors.UserName}
                  />

                  <FormGroup
                    controlId="formBasicName"
                    label="Name"
                    name="Name"
                    type="text"
                    value={values.Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.Name && errors.Name}
                  />

                  <FormGroup
                    controlId="formBasicCity"
                    label="City"
                    name="City"
                    type="text"
                    value={values.City}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.City && errors.City}
                  />

                  <FormGroup
                    controlId="formBasicPassword"
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && errors.password}
                  />

                  <FormGroup
                    controlId="formBasicConfirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword && errors.confirmPassword}
                  />

                  <Form.Group controlId="formBasicImage">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {touched.profileImage && errors.profileImage && (
                      <div className="text-danger">{errors.profileImage}</div>
                    )}
                  </Form.Group>

                  <div className="d-grid my-2">
                    <Button
                      variant="success"
                      type="submit"
                      data-testid="signup-button"
                    >
                      Sign Up
                    </Button>
                  </div>
                </Form>

                <div className="mt-3">
                  <p className="mb-0 text-center">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-success fw-bold">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
