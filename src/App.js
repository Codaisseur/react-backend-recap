import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState({
    name: null,
    email: null,
    token: null,
  });

  console.log("do i have the token in app.js", profile.token);
  return (
    <div className='App'>
      <NavBar profile={profile} setToken={setProfile} />
      <Switch>
        <Route
          path='/login'
          render={props => <LoginPage tokenSetter={setProfile} />}
        />
        <Route path='/' render={props => <Homepage token={profile.token} />} />
      </Switch>
    </div>
  );
}

export default App;
