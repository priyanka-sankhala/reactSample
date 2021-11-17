import React from 'react';
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';

function Select(props) {
    const {name, options,label} = props
    console.log("options", options);
    return (
        <div>
            <label name={name} htmlFor={name}>{label}</label>
            <Field as ="select" name={name} {...props} >
            {props.options.map(user=>{
                return(
                    <option id={user.id} value={user.id}>{user.name}</option>
                )
            })}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default Select;