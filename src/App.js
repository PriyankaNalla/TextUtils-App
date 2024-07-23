import React, { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(props) {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const colorPalettes = {
    light: {
      backgroundColor: 'white',
      color: '#172640',
      buttonColor: 'primary'
    },
    dark: {
      backgroundColor: '#172640',
      color: 'white',
      buttonColor: 'secondary'
    },
    green: {
      backgroundColor: '#284729',
      color: 'white',
      buttonColor: 'success'
    },
    red: {
      backgroundColor: '#9c2614',
      color: 'white',
      buttonColor: 'danger'
    },
    indigo: {
      backgroundColor: '#563169',
      color: 'white',
      buttonColor: 'info'
    }
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = colorPalettes.dark.backgroundColor;
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = colorPalettes.light.backgroundColor;
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const greentoggleMode = () => {
    setMode('green');
    document.body.style.backgroundColor = colorPalettes.green.backgroundColor;
    showAlert("Green Dark mode has been enabled", "success");
    document.title = "TextUtils - Green Mode";
  };

  const redtoggleMode = () => {
    setMode('red');
    document.body.style.backgroundColor = colorPalettes.red.backgroundColor;
    showAlert("Red Dark mode has been enabled", "success");
    document.title = "TextUtils - Red Mode";
  };

  const itoggleMode = () => {
    setMode('indigo');
    document.body.style.backgroundColor = colorPalettes.indigo.backgroundColor;
    showAlert("Indigo Dark mode has been enabled", "success");
    document.title = "TextUtils - Indigo Mode";
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        greentoggleMode={greentoggleMode}
        redtoggleMode={redtoggleMode}
        itoggleMode={itoggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={
            <TextForm
              showAlert={showAlert}
              heading="Try TextUtils - Word Counter, Character counter, Remove extra spaces"
              mode={mode}
              colorPalette={colorPalettes[mode]}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
