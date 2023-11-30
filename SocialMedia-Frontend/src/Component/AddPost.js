// AddPost.js
import React from "react";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import "./AddPost.css";
import { CreatePost } from "../ApiCalling/Post";
import ImageUpload from "../common/ImageUpload";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData } = useSelector((state) => state.account);

  return (
    <div className="containers">
      <Formik
        initialValues={{
          image: null,
        }}
        onSubmit={async (values) => {
          console.log(loginData.id);
          const formData = new FormData();
          formData.append("UserId", loginData.id);
          formData.append("Image", values.image);
          await dispatch(CreatePost(formData));
          navigate("/");
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <ImageUpload
              onImageChange={(file) => setFieldValue("image", file)}
            />
            <Button
              type="submit"
              label="Submit"
              className="post-submit"
              onClick={() => {}}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPost;
