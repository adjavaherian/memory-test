import React from 'react';
import classnames from 'classnames';
import Input from './Input';
import { connect } from 'react-redux';
import { saveUser } from '../actions/game-actions';

const formClasses = classnames('user-form');

export const Form = (props) => {

    return (
      <form className={formClasses} onSubmit={props.onSubmit}>
        {
          Object.keys(props)
            .map((prop, pos) => {
              return (<Input
                        type={props[prop].type}
                        name={props[prop].name}
                        label={props[prop].label}
                        validate={props[prop].validators}
                        options={props[prop].options}
                        key={pos}
                      />)
            })
        }
        <div className="form-buttons">
          <button className="col-sm-4" type="submit" >Submit</button>
          <button className="col-sm-4" type="button" >Clear Values</button>
        </div>
      </form>
    )

}

const mapStateToProps = (props = {}) => props.user;

const mapDispatchToProps = {
  onSubmit: saveUser
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
