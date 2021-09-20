import axios from "axios";
import { useState } from "react";

export default function LoginForm(props) {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");

  const onChangeEmail = event => {
    set_email(event.target.value);
  };
  const onChangePassword = event => {
    set_password(event.target.value);
  };

  const submitLogin = async event => {
    console.log("email and pass", email, password);
  };

  return (
    <div className='LoginForm'>
      <form onSubmit={submitLogin}>
        <p>
          Please fill in your details to login:{" "}
          <input
            type='email'
            placeholder='Your email address'
            value={email}
            onChange={onChangeEmail}
          />{" "}
          <input
            type='password'
            placeholder='Your password here'
            value={password}
            onChange={onChangePassword}
          />
        </p>
        <button type='submit'>Submit your details </button>
      </form>
    </div>
  );
}
