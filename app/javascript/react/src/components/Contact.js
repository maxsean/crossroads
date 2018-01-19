import React from 'react'
import TextInputField from './TextInputField'
import TextAreaField from './TextAreaField'
import FormErrors from './FormErrors'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: " ",
      contact: "",
      message: " ",
      formErrors: {
        name: '',
        contact: '',
        message: ''
      },
      nameValid: false,
      contactValid: false,
      messageValid: false,
      formValid: false,
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.postMessage = this.postMessage.bind(this)
    this.validateField = this.validateField.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  clearForm() {
    this.setState({
      name: "",
      contact: "",
      message: "",
      formErrors: {
        name: '',
        contact: '',
        message: ''
      },
      nameValid: false,
      contactValid: false,
      messageValid: false,
      formValid: false
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.formValid) {
      let formPayload = {
        name: this.state.name,
        contact: this.state.contact,
        message: this.state.message
      }
      this.postMessage(formPayload)
      this.clearForm()
    }
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
    this.validateField(name, value)
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let nameValid = this.state.nameValid
    let contactValid = this.state.contactValid
    let messageValid = this.state.messageValid

    switch(fieldName) {
      case 'name':
        nameValid = !value.match(/^\s+$/);
        fieldValidationErrors["name"] = nameValid ? '' : ' cannot be blank';
        break;
      case 'contact':
        contactValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors["contact"] = contactValid ? '' : ' is invalid';
        break;
      case 'message':
        messageValid = !value.match(/^\s+$/);
        fieldValidationErrors["message"] = messageValid ? '' : ' cannot be blank';
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      contactValid: contactValid,
      messageValid: messageValid
    })
    this.validateForm()
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.contactValid && this.state.messageValid})
  }

  postMessage(formPayload) {
    fetch('/api/v1/contacts', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({ errors: data.error})
      } else {
        this.setState({
          success: true
        })
      }
    })
  }

  render() {
    let success;
    if (this.state.success) {
      success =
      <p>
        I'll get back to you as soon as possible!
      </p>
    }
    return(
      <div>
        <div className="contact-header">
          <h2>Leave a Message!</h2>
        </div>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className="errors">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className="success">
            {success}
          </div>
          <TextInputField
            value={this.state.name}
            label="Name: "
            name="name"
            onChange={this.handleChange}
            type="text"
          />
          <TextInputField
            value={this.state.contact}
            label="Contact: "
            name="contact"
            onChange={this.handleChange}
            type="text"
          />
          <TextAreaField
            value={this.state.message}
            label="Message: "
            name="message"
            onChange={this.handleChange}
          />
          <div className='button-group'>
            <input className='button' type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
