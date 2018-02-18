import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './Input';

export const UserForm = (props) => {
  const inputs = {
    age: { val: 0, type: 'text', label: 'Age', name: 'age' },
    // gender: 0,
    // injury: false,
    // uid: null,
    // name: null,
    // nationality: null,
    // ethnicity: null
  }
  return (
    <form className="user-form">
      {
        Object.keys(inputs)
        .map((prop, pos) => {
          return (<Field type="text" name={inputs[prop].name} component={Input} label={inputs[prop].label}  key={pos}/>)
        })
      }
      <button type="submit" className="save-form" onClick={() => props.saveForm()}>Save</button>
    </form>
  )
}

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    console.log('email is required');
    errors.email = 'Required';
  }

  if (!values.password) {
    console.log('password is required');
    errors.password = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'userForm',
  validate,
})(UserForm);;
