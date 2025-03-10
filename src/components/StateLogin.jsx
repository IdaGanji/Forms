import { useState } from "react";
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });
  // the onBlur event helps us know which input field and when it has been touched and finished with
  // So the user gets a good chance to complete the entering before getting an error message
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@')


  // JS Dynamic key vs Fixed key:  
  // const keyName = "age";
  // const obj = {
  //  [keyName]: 25
  //};
  // [keyName] dynamically sets "age" as a key in obj.
  const handleInputChange = (identifier, event) => {
    setEnteredValues(prev => ({
      ...prev,
      [identifier]: event.target.value
    })
    )
    // we set the didEdit for the field that is being typed in to false so that emailIsInvalid doesn´t get true when the user is typing
    // only after the user has finished
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false
    }))
  }
  // Validating on every key-stroke
  // problem is that the error will be shown too early for this usecase
  const handleSubmit = (event) => {
    event.preventDefault();
    // To re-set the form
    // setEnteredValues({
    //   email: '',
    //   password: ''
    // })
  }
  // event that gets fired when an element loses focus
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInputChange("email", event)} value={enteredValues.email}
            onBlur={() => handleBlur('email')} />
          <div className="control-error">{emailIsInvalid && <p>Please add valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange("password", event)} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
