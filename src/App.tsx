import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Aside from './layout/Aside'
import Header from './layout/Header'
import InPlay from './pages/InPlay'
import BTRExcange from './pages/BTRExcange'
import MyBets from './pages/MyBets'
import PreMatch from './pages/PreMatch'

function App() {
  return (
    <div className="App">
      <Aside />
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<InPlay />} />
          <Route path="/btr-excange" element={<BTRExcange />} />
          <Route path="/my-bets" element={<MyBets />} />
          <Route path="/pre-match" element={<PreMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
