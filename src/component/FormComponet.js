import React from 'react';
import { Formik } from 'formik';
import InputText from './InputText';
import Select from './Select';
import Textarea from './Textarea'

const FormComponet =({command,...props})=>{
    console.log("command", command);
    switch (command) {
        case "TextInput":
            return( <InputText {...props } /> )
            break;
        case "TextAera":
            return (<Textarea {...props}/>)
        case "Select":
            return (<Select {...props}/>)
        default:
            return null
            break;
    }
}

export default FormComponet