import React from 'react';
import { Field,ErrorMessage } from 'formik';
import TextError from './TextError';

function InputText(props) {
  
    const {name, label} = props
    console.log("Name", name);
    return (
        <div>
            <label className="form-label" name={label} htmlFor={label}>{label}</label>
            <Field {...props} /> 
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default InputText;