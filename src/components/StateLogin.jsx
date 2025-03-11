import { useState } from "react";
import Input from "./Input";
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@')
  const passsInvalid = didEdit.password && !enteredValues.password.trim().length < 6

  const handleInputChange = (identifier, event) => {
    setEnteredValues(prev => ({
      ...prev,
      [identifier]: event.target.value
    })
    )
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const handleBlur = (identifier) => {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true
    }))

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        <Input label="Email" id="email" type="email" name="email"
          value={enteredValues.email}
          onChange={(event) => handleInputChange('email', event)}
          onBlur={() => handleBlur('email')}
          error={emailIsInvalid && 'Email is invalid'} />

        <Input label="Password" id="password" type="password" name="password"
          value={enteredValues.password}
          onChange={(event) => handleInputChange('password', event)}
          onBlur={() => handleBlur('password')}
          error={passsInvalid && 'Password is shorter than 6 chars'} />


      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
