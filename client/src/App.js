import React from 'react';
import './App.css';

import List from '../src/components/List/List';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App container">
      <Header/>
      <List/>
    </div>
  );
}

export default App;
