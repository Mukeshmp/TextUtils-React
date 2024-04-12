// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';
import React, { useState } from 'react'
import Blink from './Components/Blink';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a2b5b';
      showAlert("Dark mode is set", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is set", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (
    <>
      {/* <Router>
        <Navbar title='TextUtils' link='About' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Blink />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={
            <div className="container my-3">
              <TextArea heading='Enter the text here: ' mode={mode} showAlert={showAlert} />
            </div>}/>
        </Routes>
      </Router> */}
      <Navbar title='TextUtils' link='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextArea heading='Enter the text here: ' mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
