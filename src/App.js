import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <Router>
      <>
      <div>
      <Navbar title="Gulsher" about="About Me" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
      </div>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<Form mode={mode} showAlert={showAlert} />} />

          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
