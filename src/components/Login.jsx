import { useRef, useState } from "react";
export default function Login() {
    const email = useRef();
    const password = useRef();
    const [emailIsInValid, setEmailIsInValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        // To reset:
        // email.current.value = ''
        // password.current.value = ''

        // since we are not using states, we cannot check on every key-stroke
        // only when submitting so can we check if the inputs are valid or not
        if (!enteredEmail.includes('@')) {
            setEmailIsInValid(true);
            return;
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" ref={email} />
                    <div className="control-error">{emailIsInValid && <p>Email is invalid</p>}</div>
                </div>
                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" ref={password} />
                </div>
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" onClick={handleSubmit}>Login</button>
            </p>
        </form>
    );
}
