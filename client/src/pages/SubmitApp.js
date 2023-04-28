import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import DatePicker from "./DatepickerField";
import "react-datepicker/dist/react-datepicker.css";

function SubmitApp() {
  let navigate = useNavigate ();
  const initialValues = {
    appName: "",
    contactNO: "",
    gender: "",
    civilstat:"",
    birthdate:"",
    email:"",
    position: "",
    source:"",
    company: "",
    docstat:"Active",
    verified: "not"

  };

  const validationSchema = Yup.object().shape({
    appName: Yup.string().required("You must input a Name"),
    contactNO: Yup.string().min(8).max(12).required("You must input contact number"),
    gender: Yup.string().required("Select gender"),
    civilstat: Yup.string().required("Select Civil Status"),
    birthdate:Yup.date().required('Please enter a date of birth').max(new Date(), "You can't be born in the future!"),
    email:Yup.string().email('Not a proper email').required("enter a valid email"),
    source:Yup.string().required("Select Civil Status"),
    position:Yup.string().required("Please enter applied position"),
    company:Yup.string().required("Please select Company to apply for")
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/applicants", data).then((response) => {
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
          <ErrorMessage name="appName" component="span" />
          <Field
            autocomplete="off"
            id="inputSubmitApp"
            name="appName"
          />
          <label>Contact No.: </label>
          <ErrorMessage name="contactNO" component="span" />
          <Field
            autocomplete="off"
            id="inputSubmitApp"
            name="contactNO"
          />
          <label>Gender: </label>
          <ErrorMessage name="gender" component="span" />
          <Field id="inputSubmitApp" name="gender" component = "select" >
            <option value=""  >Select gender</option>
            <option value="male"  >Male</option>
            <option value="female"  >Female</option>
          </Field>
          <label>Civil Status: </label>
          <ErrorMessage name="civilstat" component="span" />
          <Field id="inputSubmitApp" name="civilstat" component = "select" > 
            <option value=""  >Select Civil Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="separated">Separated</option>
            <option value="widowed">Widowed</option>
          </Field>
          <label>Birthdate: </label>
          <ErrorMessage name="birthdate" component="span" />
          <DatePicker name="birthdate" />
          <label>Email Address: </label>
          <ErrorMessage name="email" component="span" />
          <Field id="inputSubmitApp" name="email" type = "email"/> 
          <label>Address: </label>
          <ErrorMessage name="address" component="span" />
          <Field autocomplete="off"id="inputSubmitApp" name="address"/>
          <label>Company Applied: </label>
          <ErrorMessage name="company" component="span" />
          <Field id="inputSubmitApp" name="company" component = "select" >
            <option value=""  >Select Company</option>
            <option value="qcsmb">QC Styropackaging Corporation(Bulacan)</option>
            <option value="qcedsa">QC Styropackaging Corporation(EDSA Head Office)</option>
            <option value="mcval">Multiplast Corporation (Valenzuela)</option>
            <option value="mcprov">Multiplast Corporation (Province)</option>
          </Field>
          <label>Position Applied: </label>
          <ErrorMessage name="position" component="span" />
          <Field autocomplete="off"id="inputSubmitApp" name="position"/>
          <label>Where did you apply? </label>
          <ErrorMessage name="source" component="span" />
          <Field id="inputSubmitApp" name="source" component = "select" > 
            <option value=""  >Select One</option>
            <option value="Jobstreet">Jobstreet</option>
            <option value="Indeed">Indeed</option>
            <option value="HeadHunter">HeadHunter</option>
            <option value="Facebook">Facebook</option>
            <option value="Kalibrr">Kalibrr</option>
            <option value="Walk-in">Walk-in</option>
            <option value="Referral">Referral</option>
          </Field>
          

          <button type="submit"> Submit Application</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SubmitApp;