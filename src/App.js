import './App.css';
import Main from './pages/Main';
import SharedHeader from './pages/SharedHeader';
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SingleCountry from './pages/SingleCountry';
import Error from './components/Error';
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
            <Route exact path="/countries" element={<Navigate to="/"/>}/>
            <Route path="/*" element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>

  );
}

export default App;
