import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';
import classnames from 'classnames';
import Input from './Input';

const required = value => value ? undefined : undefined;

export const UserForm = (props) => {
  const inputs = {
    age: { val: '', type: 'text', label: 'Age', name: 'age', validators: [required] },
    gender: { val: '', type: 'text', label: 'Gender', name: 'gender', validators: [required] },
    injury: { val: '', type: 'text', label: 'Injury', name: 'injury', validators: [required] },
    uid: { val: 'dsfdf', type: 'text', label: 'UId', name: 'uid', validators: [required] },
    name: { val: '', type: 'text', label: 'Name', name: 'name', validators: [required] },
    nationality: { val: '', type: 'text', label: 'Nationality', name: 'nationality', validators: [required] },
    ethnicity: { val: '', type: 'text', label: 'Ethnicity', name: 'ethnicty', validators: [required] }
  };
  const { handleSubmit, pristine, reset, submitting, user} = props
  const formClasses = classnames('user-form');

  return (
    <Form model="user" className={formClasses} onSubmit={handleSubmit}>
      {
        Object.keys(inputs)
        .map((prop, pos) => {
          const model = '.' + inputs[prop].name;
          console.log('model', model);
          return (<Control.text
                    model={model}
                    name={inputs[prop].name}
                    component={Input}
                    label={inputs[prop].label}
                    key={pos}
                    // validate={inputs[prop].validators}
                  />)
        })
      }
      <div className="form-buttons">
        <button className="col-sm-6" type="submit" disabled={submitting}>Submit</button>
        {/* <button className="col-sm-6" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button> */}
      </div>
    </Form>
  )
}

const selector = (state) => ({ user: state.userForm });

export default connect(selector)(UserForm);
