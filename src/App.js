import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#010B28"
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="ItsAllAboutText" mode={mode} toggleMode={toggleMode} />
          <Alerts alert={alert} />
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route path="/">
              <Textform mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
