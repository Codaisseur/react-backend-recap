import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
