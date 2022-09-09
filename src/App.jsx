import './App.css';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Header from './Components/Header/Header';
import MidpointFinder from './Components/Body/MidpointFinder';

function App() {
  return (
    <div className="app">
      <CookiesProvider>
        <Header />
        <MidpointFinder />
      </CookiesProvider>
    </div>
  );
}

export default App;
