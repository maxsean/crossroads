import React from 'react';

// used in form containers
const TextInputField = props => {
  let errors = Object.keys(props.formErrors).map((fieldName, i) => {
    if(props.formErrors[fieldName].length > 0 && fieldName == props.name){
      return(
        <p key={i}>{fieldName} {props.formErrors[fieldName]}</p>
      )
    } else {
      return '';
    }
  })
  return(
    <label style={{fontSize:"16px"}} onChange={props.onChange}>{props.label}
    <input style={{width: "100%", height: "24px"}}
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
    />
    {errors}
    </label>
  )
}

export default TextInputField;
