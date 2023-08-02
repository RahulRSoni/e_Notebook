import './App.css';
// import React, { Suspense, lazy } from 'react';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbars from './componants/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteState from './context/notes/NoteState';
import { Container } from 'react-bootstrap';
import AlertBar from './componants/Alert';
import Login from './componants/Login'
import Signup from './componants/Signup'
import Home from './componants/Home';
import About from './componants/About'


// const Home = lazy(() => import('./componants/Home'));
// const About = lazy(() => import('./componants/About'));

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const tonggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#1a1d45"
      showAlert(", Dark mode has been on", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "#aeedfc"
      showAlert(", Dark mode has been off", "success")
    }
  }
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Navbars tonggleMode={tonggleMode} />
        <NoteState>
          <AlertBar alert={alert} />
          <Container>
            <Routes>
              <Route exact path='/' showAlert={showAlert} element={<Home />} />
            <Route exact path="/about" element={<About mode={mode} />} />
              <Route exact path="/login" showAlert={showAlert} element={<Login />} />
              <Route exact path="/signup" showAlert={showAlert} element={<Signup />} />
            </Routes>
          </Container>
        </NoteState>
      {/* </Suspense> */}
    </>
  );
}

export default App;
