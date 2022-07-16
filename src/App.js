import './App.css';
import Header from './Header';
import Main from './Main';
import SharedHeader from './SharedHeader';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleCountry from './SingleCountry';

function App() {

  const [lightModeActive, setLightModeActive] = useState(true)
  
  document.body.style.backgroundColor = lightModeActive ? "#f8f8f8" : "#212224ff"

  return (
    // <div>
    //   <Header
    //     lightModeActive={lightModeActive}
    //     setLightModeActive={setLightModeActive}
    //   />
    //   <Main 
    //     lightModeActive={lightModeActive}
    //     setLightModeActive={setLightModeActive}
    //   />
    // </div>

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
