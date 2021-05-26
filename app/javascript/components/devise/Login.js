import React, { useState } from 'react'
import { TextInput } from '../atoms';

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const inputEmail = (e) => {
    setEmail(e.target.value)
  }

  const inputPassword = (e) => {
    setPassword(e.target.value)
  }

  const submitForm = () => {
    props.login(email, password)
  }

  return (
    <React.Fragment>
      <div className="login">
        <h2>Log in</h2>
        <div className="body">
          <TextInput
                label="email"
                value={email}
                type="email"
                onChange={inputEmail} />
          <TextInput
                label="password"
                value={password}
                type="password"
                onChange={inputPassword} />
          <button onClick={submitForm}>Submit</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
