import React from 'react';
import './Form.css';

const Form = props => (
  <div className="Form">
    <form {...props}>{props.children}</form>
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

const FormField = props => (
  <div className={`Form-field Form-${props.name} ${props.hasError ? 'has-error' : ''}`}>
    <label>
      <div>{props.label}</div>
      {props.addon && <div>{props.addon}</div>}
    </label>
    {props.children}
  </div>
);

const FormInput = ({ addon, hasError, ...props }) => (
  <FormField name="Input" {...props} hasError={hasError} addon={addon}>
    <input {...props} />
  </FormField>
);

const FormTextarea = ({ addon, hasError, ...props }) => (
  <FormField name="Textarea" {...props} hasError={hasError} addon={addon}>
    <textarea {...props} />
  </FormField>
);

export default Form;
export {
  FormRow,
  FormFooter,
  FormInput,
  FormTextarea
};