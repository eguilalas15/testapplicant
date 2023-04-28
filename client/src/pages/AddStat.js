import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
 
function AddStat() {
  let navigate = useNavigate ();
  const initialValues = {
    recstat: "",
    orderkey: 0,
  };

  const validationSchema = Yup.object().shape({
    recstat: Yup.string().required("You must input a status"),
    orderkey: Yup.number().required("You must input an orderkey"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/RecStats", data).then((response) => {
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
          <label>Name: </label>
          <ErrorMessage name="recstat" component="span" />
          <Field
            autocomplete="off"
            id="inputSubmitApp"
            name="recstat"
            placeholder="(Ex. For Interview...)"
          />
          <label>Contact No.: </label>
          <ErrorMessage name="orderkey" component="span" />
          <Field
            autocomplete="off"
            id="inputSubmitApp"
            name="orderkey"
            placeholder="(Ex. 1...)"
          />

          <button type="submit"> Add Status</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddStat;