import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../components/Navbar'
import Chart from '../components/Chart'
import CryptoName from '../components/CryptoName'
import BuyAndSellButtons from '../components/BuyAndSellButtons'
import UserAttributes from '../CognitoAPI/UserAttributes'
import CheckLoginStatus from '../CognitoAPI/CheckLoginStatus';


function LoggedIn(){
  return (
    <div>
    <Navbar2 status="LogOut" URL = "https://cryptosimulatorleadeba1b835f-ba1b835f-dev.auth.us-east-1.amazoncognito.com/logout?client_id=1lh9jp1gpvju97aac6cecs1o3i&response_type=code&redirect_uri=http://localhost:3000/"/>
    <CryptoName name="BTC"/>      
    <Chart ticker ="BINANCE:BTCUSD"/>
    <BuyAndSellButtons/>
    <h1>After Login</h1>
    <UserAttributes/>
    <CheckLoginStatus/>
    </div>
  );
}



export default LoggedIn