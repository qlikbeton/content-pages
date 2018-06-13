import React from 'react';
import './Form.css';

const Form = props => (
  <div className="Form">
    <form>{props.children}</form>
  </div>
);

const FormRow = props => (
  <div className="Form-row">
    {props.children}
  </div>
);

const FormFooter = props => (
  <div className="Form-footer">
    {props.children}
  </div>
);

const FormInput = props => (
  <div className="Form-field Form-input">
    <label>{props.label}</label>
    <input {...props} />
  </div>
);

const FormTextarea = props => (
  <div className="Form-field Form-textarea">
    <label>{props.label}</label>
    <textarea {...props} />
  </div>
);

export default Form;
export {
  FormRow,
  FormFooter,
  FormInput,
  FormTextarea
};