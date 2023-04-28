import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
 
function Login() {
  let navigate = useNavigate ();
  const initialValues = {
    username: "",
    password: "",
    usertype: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/Users/login", data).then((response) => {
      navigate("/");
    });
  };
  return (
    <div className="submitAppPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputSubmitApp"
            name="username"
          />
          <label>Password</label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            id="inputSubmitApp"
            name="password"
            type = "password"
          />

          <button type="submit"> Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;