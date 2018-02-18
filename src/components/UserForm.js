import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import Input from './Input';

const required = value => value ? undefined : 'Required';

export const UserForm = (props) => {
  const inputs = {
    age: { val: '', type: 'text', label: 'Age', name: 'age', validators: [required] },
    gender: { val: '', type: 'text', label: 'Gender', name: 'gender', validators: [required] },
    // injury: false,
    // uid: null,
    // name: null,
    // nationality: null,
    // ethnicity: null
  };
  const { handleSubmit, pristine, reset, submitting } = props
  const formClasses = classnames('user-form', 'container');
  return (
    <form className={formClasses} onSubmit={handleSubmit}>
      {
        Object.keys(inputs)
        .map((prop, pos) => {
          return (<Field
                    type="text"
                    name={inputs[prop].name}
                    component={Input}
                    label={inputs[prop].label}
                    key={pos}
                    validate={inputs[prop].validators}
                  />)
        })
      }
      <div className="form-buttons row">
        <button className="col-sm-6" type="submit" disabled={submitting}>Submit</button>
        <button className="col-sm-6" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

const validate = (values) => {
  console.log('values', values)
  const errors = {};

  if (!values.age) {
    console.log('age is required');
    errors.age = 'Age as a number';
  }

  if (!values.gender) {
    console.log('gender is required');
    errors.password = 'Gender (Optional)';
  }

  return errors;
};

export default reduxForm({
  form: 'userForm'
})(UserForm);;
