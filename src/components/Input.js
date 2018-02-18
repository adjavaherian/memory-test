import React from 'react'

export const Input = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <label>{label}</label>
      </div>
      <div className="col-sm-6">
        <input {...input} type={type} />
      </div>
      {
        touched &&
        error &&
        <div className="col-sm-6">
          {error}
        </div>
      }
    </div>
  )
}

export default Input;
