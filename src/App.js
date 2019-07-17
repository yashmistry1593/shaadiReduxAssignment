import React from 'react';
import './App.css';
import mainLogo from './static-images/home-logo.png';
import sideLogo from './static-images/6-million-stories.png';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <header>
        <div className="home-logo">
          <img src={mainLogo} alt="" />
        </div>
        <div className="side-logo">
          <img src={sideLogo} alt="" />
        </div>
      </header>
      <Home />
    </div>
  );
}


export default App;
