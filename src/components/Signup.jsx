import { useState } from "react";
export default function Signup() {
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  // We want to use a native built-in feature of the browser
  // FormData()
  function handleSubmit(event) {
    event.preventDefault();
    // the target of the event is the form element
    // we pass it into the formdata object. it resturns an object that has all data passed in the form
    const fd = new FormData(event.target)
    const enteredEmail = fd.get('email')
    const enteredPass = fd.get('password')
    // an array of key-value pair arrays
    console.log([...fd.entries()]);
    // Turns the outer array into an object with properties as each array
    console.log(Object.fromEntries(fd.entries()));
    const data = Object.fromEntries(fd.entries());

    // when you have a group of checkboxes(inputs) that have the same name, should be handled manually
    const acquisitionArray = fd.getAll('acquisition')
    data.acquisition = acquisitionArray
    console.log(data);
    if (data.password !== data['confirm-password']) {
      setPasswordsMatch(false);
      return;
    }

    // To reset the form call the reset method on the form element
    //event.target.reset();
  }
  // The button inside a form which is of type=submit calls the onSubmit method of the form element
  // The button inside a form which is of type=reset calls the reset method on the form element
  return (
    // all the inputs/select/... fields must have the name property for FormData to know of them
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">{!passwordsMatch && <p>Passwords do not match</p>}</div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
