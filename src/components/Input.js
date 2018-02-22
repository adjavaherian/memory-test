import React from 'react';
import { connect } from 'react-redux';
import { onChange } from '../actions/game-actions';

export const Input = ({
  name,
  label,
  type,
  options,
  value,
  error,
  onChange
}) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <label>{label}</label>
      </div>
      <div className="col-sm-6">
        {
          type === 'radio' &&
          options.map((val, key) => {
            return (
              <span key={key}>
                <input type={type} name={name} value={val.value} onChange={onChange} />
                <span> {val} </span>
              </span>
            )
          })
        }
        {
          type === 'text' &&
          <input type={type} name={name} value={value} onChange={onChange}/>
        }

      </div>
      {
        error &&
        <div className="col-sm-6">
          {error}
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state = {}) => ({
  user: state.user
});

const mapDispatchToProps = {
  onChange
};

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

export default InputContainer;
