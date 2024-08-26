import {  Outlet, Route, Routes } from 'react-router-dom';

import HomePage from './components/Homepage';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import NotFount from './components/NotFound';

import Map from './components/Map';

import { Nav } from './components/Nav';
import { useState } from 'react';

// ייבוא הלוגו

import Logo from "/Users/Amirg/שולחן העבודה/project-/project/src/images/logo.png"; // עליך להוסיף את נתיב התמונה המתאים

function App() {

  const [user, setUser] = useState(undefined)
 


  return (
    <>
     
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Logo} alt="Logo" style={{ width: '70px', marginRight: '10px' }} /> 
      <h1 style={{ color: 'black', fontSize: "40px" }}>Status Map</h1> {/* הכותרת */}
      </div>
      <Nav />
      <Routes>
      <Route path='/' element={<HomePage />} /> {/* נתיב ברירת מחדל */}
        <Route path='homePage' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='logIn' element={<LogIn user={setUser}
          />} />
        <Route path='signUp' element={<SignUp />} />
        
        <Route path='map' element={<Map/>} />


        <Route path='*' element={<NotFount />} />


      </Routes>
      <Outlet />

    </>
  );
}

export default App;
