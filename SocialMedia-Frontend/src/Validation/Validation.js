import * as Yup from "yup";
export const SignUpValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  UserName: Yup.string()
    .min(3, "User Name must be at least 3 characters")
    .required("User Name is required"),
  Name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  City: Yup.string().required("City is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const LoginValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
