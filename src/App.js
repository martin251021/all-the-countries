import './App.css';
import Main from './pages/Main';
import SharedHeader from './pages/SharedHeader';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleCountry from './pages/SingleCountry';
import { AppProvider } from './context/AppContext';

export const AppContext = React.createContext()
export const AppContextUpdate = React.createContext()

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedHeader />} >
            <Route index element={<Main />} />
            <Route path=":countryId" element={<SingleCountry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>

  );
}

export default App;
