import React, { useState } from "react";
import { Row, Container } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormComponet from "./../FormComponet";
import users from "./../../data/user"

const initialValues = {
  todoDate: "",
  assign: "",
  assignee: "",
  task: "",
  status: "",
};
const validationSchema = Yup.object({
  todoDate: Yup.string().required(),
  assign: Yup.string().required(),
  assignee: Yup.string().required(),
  task: Yup.string().required().min(5),
});

const onSubmit = (values) => {
  console.log("values", values);
};
const Add = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
      <Row>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <>
                <div>
                  <label for="todoDate">Date</label>
                  <DatePicker
                    className="form-control"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <FormComponet
                  name="task"
                  label="Task"
                  placeholder="Enter todo task"
                  command="TextInput"
                  className="form-control"
                />
                <FormComponet
                  name="assign"
                  label="Assign To"
                  placeholder="Select the assign"
                  command="Select"
                  className="form-control"
                  options={users}
                />
              </>
            );
          }}
        </Formik>
      </Row>
    </Container>
  );
};
export default Add;
