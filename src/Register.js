import React from "react";
import { Card } from "react-bootstrap";
import {Row,Container} from 'reactstrap';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormComponet from "./component/FormComponet";

const initialValues = {
  first_name: "",
};
const validationSchema = Yup.object({
  first_name: Yup.string().required(),
});
const onSubmit = (values) => {
  console.log(values);
};

function Register(props) {
  return (
    <Container>
     <Row>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            console.log(formik);
            return (
              <Form>
                <FormComponet
                  command="TextInput"
                  name="first_name"
                  id="first_name"
                  label="First Name"
                  className="form-control"
                />
              </Form>
            );
          }}
        </Formik>
        </Row> 
    </Container>
    
    
  );
}

export default Register;
