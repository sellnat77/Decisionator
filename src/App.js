import logo from './logo.svg';
import './App.css';
import { CookiesProvider } from 'react-cookie';
import Header from './Components/Header/Header.js';

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
