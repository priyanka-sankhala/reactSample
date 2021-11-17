import { Button } from "react-bootstrap";
//import { Button } from "bootstrap";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

function User() {
  const initialValues = {
    first_name: "",
    last_name: "",
    username: "",
    // address: "",
  };
  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required(),
    username: Yup.string().required(),
    // address: Yup.string().required(),
  });
  const onSubmit = (values) => {
    console.log("Submit ==>" + values);
  };

  return (
    <div className="user">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log("Formik", formik);
          return (
            <div className="container">
              <Form>
                <div className="form-group">
                  <label for="first_name"> First Name </label>
                  <Field
                    className="form-control"
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                  />
                  <ErrorMessage name="first_name" component={TextError} />
                </div>
                <div className="form-group">
                  <label for="last_name">Last Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="last Name"
                  />
                  <ErrorMessage id="last_name" name="last_name" component={TextError} />
                </div>
                <div className="form-group">
                  <label for="username">Username</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User Name"
                  />
                  <ErrorMessage name="username" component={TextError} />
                </div>
                <div className="form-group">
                  <button type="submit" >
                    Submit
                  </button>
                </div>

                <div className="form-group">
                  <Button type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default User;
