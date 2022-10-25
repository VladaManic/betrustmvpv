import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import GeneralStyles from './shared/styles/GeneralStyles';
import GlobalFonts from './assets/fonts/fonts';
import { observer } from "mobx-react"
import store from './store/store'

import Aside from './layout/Aside'
import Header from './layout/Header'
import InPlay from './pages/InPlay'
import BTRExcange from './pages/BTRExcange'
import MyBets from './pages/MyBets'
import PreMatch from './pages/PreMatch/PreMatch'

function App() {
  const fetchData = () => {
    fetch("http://localhost:4000/sport")
      .then((response) => response.json())
      .then((data) => {
				store.addData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
	useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <GeneralStyles />
      <GlobalFonts />
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

export default observer(App);
