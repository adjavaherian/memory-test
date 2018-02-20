import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';
import classnames from 'classnames';
import Input from './Input';
import Radio from './Radio';

const required = value => value ? undefined : undefined;

export const UserForm = (props) => {
  const radios = {
    gender: { val: '', type: 'radio', label: 'Gender', name: 'gender', validators: [required], 'options': ['M', 'F', 'N'] },
    injured: { val: '', type: 'radio', label: 'Injured', name: 'injured', validators: [required], 'options': ['Y', 'N'] },
  }
  const inputs = {
    uid: { val: '', type: 'text', label: 'User Id', name: 'uid', validators: [required] },
    age: { val: '', type: 'text', label: 'Age', name: 'age', validators: [required] },
    name: { val: '', type: 'text', label: 'Name', name: 'name', validators: [required] },
    nationality: { val: '', type: 'text', label: 'Nationality', name: 'nationality', validators: [required] },
    ethnicity: { val: '', type: 'text', label: 'Ethnicity', name: 'ethnicty', validators: [required] }
  };
  const { handleSubmit, pristine, reset, submitting, user} = props
  const formClasses = classnames('user-form');

  return (
    <Form model="user" className={formClasses} onSubmit={handleSubmit}>
      {
        Object.keys(radios)
        .map((prop, pos) => {
          const model = '.' + radios[prop].name;
          return (<Control.radio
                    model={model}
                    name={radios[prop].name}
                    component={Radio}
                    label={radios[prop].label}
                    key={pos}
                    options={radios[prop].options}
                  />)
        })
      }
      {
        Object.keys(inputs)
        .map((prop, pos) => {
          const model = '.' + inputs[prop].name;
          // console.log('model', model);
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
        <button className="col-sm-4" type="submit" disabled={submitting}>Submit</button>
        <button className="col-sm-4" type="button" disabled={submitting}>Clear Values</button>
      </div>
    </Form>
  )
}

const selector = (state) => ({ user: state.userForm });

export default connect(selector)(UserForm);
