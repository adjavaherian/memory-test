import React from 'react'

export const Radio = ({
  input,
  label,
  type,
  value,
  name,
  options
}) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <label>{label}</label>
      </div>
      {
        options.map((val, key) => {
          return (
            <div className="col-sm-2" key={key}>
              <input type="radio" name={name} />
              <span> {val}</span>
            </div>
          )
        })
      }
      {
        // touched &&
        // error &&
        <div className="col-sm-6">
          {/* {error} */}
        </div>
      }
    </div>
  )
}

export default Radio;
