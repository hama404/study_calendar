import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton, TextInput } from '../atoms'

const Signup = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')

  const inputName = (e) => {
    setName(e.target.value)
  }

  const inputEmail = (e) => {
    setEmail(e.target.value)
  }

  const inputPassword = (e) => {
    setPassword(e.target.value)
  }

  const inputPasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  const submitForm = () => {
    props.signup(name, email, password, password_confirmation)
  }

  return (
    <>
      <div className="signup">
        <h2>Sign up</h2>
        <div className="body">
          <TextInput
            label="name"
            value={name}
            type="text"
            onChange={inputName}
          />
          <TextInput
            label="email"
            value={email}
            type="email"
            onChange={inputEmail}
          />
          <TextInput
            label="password"
            value={password}
            type="password"
            onChange={inputPassword}
          />
          <TextInput
            label="password_confirmation"
            value={password_confirmation}
            type="password"
            onChange={inputPasswordConfirmation}
          />
          <div className="spacer" />
          <Link to="/login">If you have an account, please log in</Link>
          <div className="btn-group">
            <PrimaryButton onClick={submitForm}>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
