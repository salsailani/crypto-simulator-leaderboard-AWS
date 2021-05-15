import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Navbar2 from './components/Navbar'
import Chart from './components/Chart'
import CryptoName from './components/CryptoName'
import BuyAndSellButtons from './components/BuyAndSellButtons'
import {BrowserRouter as Router, Route} from "react-router-dom";


function App(){
  return (
    <div>
    <Router>
      <Navbar2/>
      <Route path="/Login.js" exact component={Login} />
    </Router>
    <CryptoName name="BTC"/>
    <Chart ticker ="BINANCE:BTCUSD"/>
    <BuyAndSellButtons/>
    </div>
  );
}



export default App