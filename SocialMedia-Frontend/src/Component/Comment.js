// Comment.js

import React, { useEffect } from "react";
import "./Comment.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CreateComment, GetCommnet } from "../ApiCalling/Post";
import Button from "../common/Button";

const CommentSchema = Yup.object().shape({
  content: Yup.string().required("Comment cannot be empty"),
});

const Comment = () => {
  const { param1, param2 } = useParams();
  console.log(param1, param2);
  const dispatch = useDispatch();
  const { commentData } = useSelector((state) => state.post) || {
    commentData: [],
  };

  useEffect(() => {
    dispatch(GetCommnet(param1));
  }, []);

  const handleAddComment = async (values, { resetForm }) => {
    const data = {
      UserId: param2,
      PostId: param1,
      Content: values.content,
    };

    await dispatch(CreateComment(data));
    await dispatch(GetCommnet(param1));
    // Reset the form after submitting
    resetForm();
  };

  return (
    <div className="comment-container">
      <div className="comment-input">
        <Formik
          initialValues={{ content: "" }}
          validationSchema={CommentSchema}
          onSubmit={handleAddComment}
        >
          <Form>
            <div className="main-comment">
              <Field
                type="text"
                name="content"
                placeholder="Add a comment..."
                className="input-comment"
              />
              <ErrorMessage name="content" component="div" className="error" />

              <Button
                type="submit"
                label="Add Comment"
                className="comment-button"
              />
            </div>
          </Form>
        </Formik>
      </div>
      <h3 className="comment-title">Comments</h3>
      <ul className="comment-list">
        {commentData?.map((comment, index) => (
          <li key={index} className="comment-item">
            <span className="comment-username">{comment.name}</span>
            <span className="comment-content">{comment.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
