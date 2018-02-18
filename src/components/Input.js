import React from 'react'

export const Input = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input {...input} type={type} />
      </div>
      {
        touched &&
        error &&
        <div>
          {error}
        </div>
      }
    </div>
  )
}

export default Input;
