import './App.css';
import Header from './Header';
import Main from './Main';
import React, { useState } from "react";

function App() {

  const [lightModeActive, setLightModeActive] = useState(true)
  
  document.body.style.backgroundColor = lightModeActive ? "#f8f8f8" : "#212224ff"

  console.log("a")

  return (
    <div>
      <Header
        lightModeActive={lightModeActive}
        setLightModeActive={setLightModeActive}
      />
      <Main 
        lightModeActive={lightModeActive}
        setLightModeActive={setLightModeActive}
      />
    </div>
  );
}

export default App;
