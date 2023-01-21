import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Mid from './components/Body/Mid';
import ApiCalling from './ApiCalling';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Mid/>
     <ApiCalling/>
    </div>
  );
}

export default App;
