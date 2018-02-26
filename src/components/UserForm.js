import React from 'react';
import classnames from 'classnames';
import Input from './Input';
import { connect } from 'react-redux';
import { saveUser } from '../actions/game-actions';

const formClasses = classnames('user-form');

export const Form = ({ user, onSubmit }) => {
    return (
      <form className={formClasses} onSubmit={onSubmit}>
        {
          Object.keys(user)
            .filter((prop) => user[prop] !== null)
            .map((prop, pos) => {
              return (<Input
                        type={user[prop].type}
                        name={user[prop].name}
                        label={user[prop].label}
                        validate={user[prop].validators}
                        options={user[prop].options}
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

const mapStateToProps = (state = {}) => ({
    user: state.user
});

const mapDispatchToProps = {
  onSubmit: saveUser
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
