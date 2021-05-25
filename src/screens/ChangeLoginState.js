import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../components/Navbar'
import Chart from '../components/Chart'
import CryptoName from '../components/CryptoName'
import BuyAndSellButtons from '../components/BuyAndSellButtons'
import UserAttributes from '../CognitoAPI/UserAttributes'
import CheckLoginStatus from '../CognitoAPI/CheckLoginStatus';


function ChangeLoginState(){
  return (
    <div>
    <Navbar2/>
    <CryptoName name="BTC"/>      
    <Chart ticker ="BINANCE:BTCUSD"/>
    <BuyAndSellButtons/>
    <h1>After Login</h1>
    <UserAttributes/>
    <CheckLoginStatus/>
    </div>
  );
}



export default ChangeLoginState