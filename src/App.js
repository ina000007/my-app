import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    console.log(message);
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0c4278';
      showAlert("Dark mode enabled", 'success');
      document.title = "Dark";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", 'success');
      document.title = "Light";
    }
  };
  return (
    <>
      {/* <Router> */}
      <NavBar title="MyTextUtils" about="myAbout" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element = {<About />}/>
            <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />} />
              
          </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
