import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mid from './components/Body/Mid';
import ApiCalling from './ApiCalling';
import Aboutus from './components/About/Aboutus';
import Profile from './components/profle/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Mid/>}/>
        <Route eaxct path="/aboutus" element={<Aboutus/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
