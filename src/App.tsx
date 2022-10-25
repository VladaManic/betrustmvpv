import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import GeneralStyles from './shared/styles/GeneralStyles';
import GlobalFonts from './assets/fonts/fonts';

import Aside from './layout/Aside'
import Header from './layout/Header'
import InPlay from './pages/InPlay'
import BTRExcange from './pages/BTRExcange'
import MyBets from './pages/MyBets'
import PreMatch from './pages/PreMatch/PreMatch'

function App() {
  //useEffect(() => {
		// fetch('http://localhost:3000/sport')
		// 	.then((res) => res.json())
		// 	.then((result) => {
		// 			console.log(result);
		// 	})
    // fetch(
    //   'http://localhost:3000/sport',
    // ).then((response) => {
    //   return response.json();
    // }).then((data) => {
    //   const items = [];
    //   for(const key in data){
    //     const item = {
    //       id: key,
    //       ...data[key]
    //     }
    //     items.push(item)
    //   }
    //   console.log(items);
    // })
    
	//}, [])
  // const getData=()=>{
  //   fetch('http://localhost:4000/sport'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }).then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //     });
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
//   useEffect(() => {
//     fetch('http://localhost:4000/sport')
//     .then((res) => res.json())
//     .then(function(response){
//       console.log(response)
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(myJson);
//     });
// }, []);

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

export default App;
