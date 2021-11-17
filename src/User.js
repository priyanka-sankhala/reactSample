import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Form, Field, Formik, ErrorMessage, FastField, useField } from "formik";
//import { button } from 'react-bootstrap'
import * as Yup from "yup";
import FormError from "./component/TextError";
import InputText from "./component/InputText"
import countries from "./data/countries";


const initialsValue = {
  first_name: "",
  last_name: "",
  user_name: "",
  email: "",
  address: "",
  comments: "",
  country:""
};

const savedValue = {
  first_name: "Priyanka",
  last_name: "Sankhala",
  user_name: "Priyanka Sankhala",
  email: "p@gmail.com",
  address: "Dilip Nager Lal Sager",
  comments: "test ",
};
const validationSchema = Yup.object({
  first_name: Yup.string().max(15, "Must be 15 characters or less").required(),
  last_name: Yup.string().max(20, "Must be 20 characters or less").required(),
  email: Yup.string().email("Invalid email address").required(),
});

const validateComment = (value) => {
  let error;
  console.log("comment value", value);

  if (!value) {
    error = "Required";
  }
  return error;
};

const setCountryValues = (value)=>{
  console.log("setCountryValues", value);
  
}

const setSecondaryCountry = (value,formik)=>{
  console.log("value", value);
}

const onSubmit = (formData, onSubmitProps) => {
  console.log("In on submit function");

  console.log(formData);
  console.log("onsubmit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
};

const User = () => {
  const [formValue, setFormValue] = useState(null);
 
  
  return (
    <Formik
      initialValues={formValue || initialsValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount={true}
      enableReinitialize={true}
      //   validateOnChange={false}
      //   validateOnBlur={false}
    >
      {(formik) => {
        console.log("formik props", formik);
        
        return (
          <Form className="form">
            <div className="form-control">
              <label for="first_name">First Name</label>
              <Field
                type="text"
                name="first_name"
                className="form-control"
                onChange={(e) => {
                  formik.setFieldValue("first_name", e.target.value);
                  formik.setFieldValue(
                    "user_name",
                    e.target.value + formik.values.last_name
                  );
                }}
              ></Field>
              <ErrorMessage name="first_name" component={FormError} />
            </div>
            <div className="form-control">
              <label for="last_name">Last Name</label>
              <Field
                type="text"
                name="last_name"
                className="form-control"
                onChange={(e) => {
                  formik.setFieldValue("last_name", e.target.value);
                  formik.setFieldValue(
                    "user_name",
                    formik.values.first_name + e.target.value
                  );
                }}
              ></Field>
              <ErrorMessage name="last_name" component={FormError} />
            </div>
            <div className="form-control">
              <label for="user_name">User Name</label>
              <Field
                type="text"
                name="user_name"
                className="form-control"
              ></Field>
              <ErrorMessage name="user_name" component={FormError} />
            </div>
            <div className="form-control">
              <label for="email">Email</label>
              <Field type="text" name="email" className="form-control"></Field>
              <ErrorMessage name="email" component={FormError} />
            </div>
            <div className="form-control">
              <label for="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                className="form-control"
                name="comments"
                validate={validateComment}
              ></Field>
              <ErrorMessage name="comments" component={FormError} />
            </div>
            <div className="form-control">
              <label for="address">Address</label>
              <Field
                type="text"
                name="address"
                className="form-control"
                id="address"
              >
                {(props) => {
                  // console.log("address props", props);
                  const { meta, fields } = props;
                  return (
                    <div>
                      <input
                        className="form-control"
                        id="address"
                        name="address"
                        {...fields}
                      />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <ErrorMessage name="address" component={FormError} />
            </div>
            <div className="form-control">
              <select name="country" id="country" onChange={(e)=>{
                console.log( e.target.value);
                formik.setFieldValue("country", e.target.value)
              }}>
                {countries.map(ele=>{
                  return <option value={ele.code}>{ele.name}</option>
                })}
              </select>
            </div>
            <div className="form-control">
              <select name="country-2" id="country-2" onChange={setSecondaryCountry}>
                {countries.map(ele=>{
                  return <option value={ele.code}>{ele.name}</option>
                })}
              </select>
            </div>
            <div>
              <label for="submit"></label>
              <Button
                type="submit"
                disabled={
                  !formik.isValid || formik.isSubmitting ? "true" : false
                }
              >
                Submit
              </Button>
            </div>
            <div>
              <Button type="button" onClick={() => setFormValue(savedValue)}>
                Set saved data
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default User;
