import React from 'react'
import TextInputField from './TextInputField'
import TextAreaField from './TextAreaField'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      contact: "",
      message: "",
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.postMessage = this.postMessage.bind(this)
  }

  clearForm() {
    this.setState({
      username: "",
      contact: "",
      message: ""
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      username: this.state.username,
      contact: this.state.contact,
      message: this.state.message
    }
    this.postMessage(formPayload)
    this.clearForm()
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
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
    return(
      <div>
        <div className="contact-header">
          Leave a Message!
        </div>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <TextInputField
            content={this.state.username}
            label="Name: "
            name="username"
            handleChange={this.handleChange}
          />
          <TextInputField
            content={this.state.contact}
            label="Email: "
            name="contact"
            handleChange={this.handleChange}
          />
          <TextAreaField
            content={this.state.message}
            label="Message: "
            name="message"
            handleChange={this.handleChange}
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
