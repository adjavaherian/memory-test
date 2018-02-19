import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import Input from './Input';

const required = value => value ? undefined : undefined;

export const UserForm = (props) => {
  const inputs = {
    age: { val: '', type: 'text', label: 'Age', name: 'age', validators: [required] },
    gender: { val: '', type: 'text', label: 'Gender', name: 'gender', validators: [required] },
    injury: { val: '', type: 'text', label: 'Injury', name: 'injury', validators: [required] },
    uid: { val: '', type: 'text', label: 'UId', name: 'uid', validators: [required] },
    name: { val: '', type: 'text', label: 'Name', name: 'name', validators: [required] },
    nationality: { val: '', type: 'text', label: 'Nationality', name: 'nationality', validators: [required] },
    ethnicity: { val: '', type: 'text', label: 'Ethnicity', name: 'ethnicty', validators: [required] }
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
