import React from 'react'

const FormErrors = ({formErrors}) => {
  let errors = Object.keys(formErrors).map((fieldName, i) => {
    if(formErrors[fieldName].length > 0){
      return(
        <p key={i}>{fieldName} {formErrors[fieldName]}</p>
      )
    } else {
      return '';
    }
  })
  return(
    <div className='formErrors'>
      {errors}
    </div>
  )
}

export default FormErrors
