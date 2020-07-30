import React from 'react';
import './App.css';
import Search from '../Search/Search';


function App() {
  

  return (
    <div className="mainView">
      <header>
        <h1>
          PoKé React
        </h1>
      </header>
      <div className="headerSpacer"></div>
      <Search/>
    </div>
  );
}

export default App;