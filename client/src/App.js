import React from "react";
import About  from './pages/About';
import  Contact  from './pages/Contact';
import  Home  from './pages/Home';
import Login  from './pages/Login';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Review from './pages/Review';
import China from './pages/China';
import Sweden from './pages/Sweden'
import NewZealand from './pages/NewZealand'
import France from './pages/France'
import Booking from './pages/Booking'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/Reviews" element={<Review/>} />
        <Route path="/China" element={<China/>} />
        <Route path="/Sweden" element={<Sweden/>} />
        <Route path="/NewZealand" element={<NewZealand/>} />
         <Route path="/France" element={<France/>} />
         <Route path="/Booking" element={<Booking/>} />
      </Routes>
      </div>
    </Router>
  );
}
