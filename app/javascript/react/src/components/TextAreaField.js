import React from 'react';

// used in form containers
const TextAreaField = props => {
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
    </label>
  )
}

export default TextAreaField;
