import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../components/Navbar'
import Chart from '../components/Chart'
import CryptoName from '../components/CryptoName'
import BuyAndSellButtons from '../components/BuyAndSellButtons'
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserAttributes from '../CognitoAPI/UserAttributes'


function ChangeLoginState(){
  return (
    <div>
    <Navbar2/>
    <CryptoName name="BTC"/>      
    <Chart ticker ="BINANCE:BTCUSD"/>
    <BuyAndSellButtons/>
    <h1>After Login</h1>
    <UserAttributes/>
    </div>
  );
}



export default ChangeLoginState