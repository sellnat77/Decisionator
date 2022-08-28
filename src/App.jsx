import './App.css';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Header />
      </CookiesProvider>
    </div>
  );
}

export default App;
