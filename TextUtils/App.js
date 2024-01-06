import './App.css';
// import DarkMode from './Components/DarkMode';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#666666";
      showAlert("Dark mode Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter The Text Below" mode={mode} showAlert={showAlert} />
        {/* <DarkMode/> */}
      </div>

    </>
  );
}

export default App;