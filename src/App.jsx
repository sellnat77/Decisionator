import './App.css';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

function App() {
  const appName = 'Rendezmeet';
  return (
    <div className="app">
      <CookiesProvider>
        <Header title={appName} />
        <Body />
      </CookiesProvider>
    </div>
  );
}

export default App;
