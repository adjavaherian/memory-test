import React from 'react';
import classnames from 'classnames';
import Input from './Input';
import { connect } from 'react-redux';
import { onSubmit } from '../actions/game-actions';

const formClasses = classnames('user-form');

export const Form = (state) => {

    return (
      <form className={formClasses}>
        {
          Object.keys(state)
            .map((prop, pos) => {
              return (<Input
                        type={state[prop].type}
                        name={state[prop].name}
                        label={state[prop].label}
                        validate={state[prop].validators}
                        options={state[prop].options}
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

const mapStateToProps = (state = {}) => state.user;

const mapDispatchToProps = {
  onSubmit
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
