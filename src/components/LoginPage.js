import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function LoginForm(props) {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const history = useHistory();

  const onChangeEmail = event => {
    set_email(event.target.value);
  };
  const onChangePassword = event => {
    set_password(event.target.value);
  };

  const submitLogin = async event => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      });
      console.log(response);
      // setToken(response.data.token);
      props.tokenSetter({
        token: response.data.token,
        name: response.data.name,
        email: response.data.email,
      });
      history.push("/");
    } catch (e) {
      console.log(e.message);
    }
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
