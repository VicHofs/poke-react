import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import Header from './components/Header/Header';

function App() {
  

  return (
    <div className="mainView">
      <Header />
      <div className="headerSpacer"></div>
      <SearchBar />
    </div>
  );
}

export default App;