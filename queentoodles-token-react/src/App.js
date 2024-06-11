import './App.css';
import React from 'react';
import Header from './components/Header';
import ChartComp from './components/Chart';
import Breaker from './components/Breaker';
import Quotes from './components/Quotes';
function App() {
  return(
    <>
    <Header />
    <ChartComp />
    <Quotes />
    </>
  )
 
}

export default App;
