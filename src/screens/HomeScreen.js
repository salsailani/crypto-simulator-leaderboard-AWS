import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../components/Navbar'
import Chart from '../components/Chart'
import CryptoName from '../components/CryptoName'
import BuyAndSellButtons from '../components/BuyAndSellButtons'


function HomeScreen(){
  return (
    <div>
    <Navbar2 status = "Login/SignUp" URL = "https://cryptosimulatorleadeba1b835f-ba1b835f-dev.auth.us-east-1.amazoncognito.com/login?client_id=1lh9jp1gpvju97aac6cecs1o3i&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://master.d35jd4sqaf8f3h.amplifyapp.com/Login"/>
    <CryptoName name="BTC"/>
    <Chart ticker ="BINANCE:BTCUSD"/>
    <BuyAndSellButtons/>
    </div>
  );
}



export default HomeScreen