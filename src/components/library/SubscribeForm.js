import React from 'react';
import { Button, Form, FormInput } from '../library';
import './SubscribeForm.css';

const SubscribeForm = props => (
  <div className="Subscribe-form">
    <Form>
        <FormInput name={props.input} placeholder={props.placeholder} />
        <Button submit label={props.submit} primary small />
    </Form>
  </div>
);

export default SubscribeForm;