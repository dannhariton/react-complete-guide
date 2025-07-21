import { useRef, useState } from "react";

export default function Login() {
  const [formIsInvalid, setFormIsInvalid] = useState(false);

  const email = useRef("");
  const password = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPass = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setFormIsInvalid(true);
      return;
    }

    setFormIsInvalid(false);

    console.log(enteredEmail, enteredPass);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          <div className="control-error">
            {formIsInvalid && <p>Please enter a correct email!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
