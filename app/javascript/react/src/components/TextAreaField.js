import React from 'react';

// used in form containers
const TextAreaField = props => {
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
    <label
      onChange={props.onChange}
      style={{verticalAlign:'top'}}
      >{props.label}
    <textarea
      className="area"
      id={props.name}
      name={props.name}
      type='text'
      value={props.value}
      style={{margin:'5px 0',width:'100%',height:'100px'}}
    />
    {errors}
    </label>
  )
}

export default TextAreaField;
