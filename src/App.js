import './App.css';
import Main from './pages/Main';
import SharedHeader from './pages/SharedHeader';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleCountry from './pages/SingleCountry';

function App() {

  const [lightModeActive, setLightModeActive] = useState(true)
  
  document.body.style.backgroundColor = lightModeActive ? "#f8f8f8" : "#212224ff"

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedHeader 
                lightModeActive={lightModeActive}
                setLightModeActive={setLightModeActive}/>} >
          <Route index element={<Main 
                  lightModeActive={lightModeActive}
                  setLightModeActive={setLightModeActive}/>} />
          <Route path=":countryId" element={<SingleCountry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
