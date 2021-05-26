import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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

  const loginAsTestUser = () => {
    props.login(
      "test1@gmail.com", "hogehoge"
    )
  }

  const submitForm = () => {
    props.login(email, password)
  }

  return (
    <>
      <div className="login">
        <h2>Log in</h2>
        <div className="body">
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
          <div className="spacer" />
          <Link to="/signup">If you don't have an account, please sign up</Link>
          <div className="btn-group">
            <button onClick={loginAsTestUser}>Login as test user</button>
            <button onClick={submitForm}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
