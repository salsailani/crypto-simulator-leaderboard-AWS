import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import TradingViewWidget, { Themes, BarStyles } from 'react-tradingview-widget';
//import Login from './Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


function App(){
  return (
    <div>
    <Router>
      <Navbar2/>
    </Router>
    <CryptoName name="BTC"/>
    <Chart ticker ="BINANCE:BTCUSD"/>
    <BuyandSellButtons/>
    </div>
  );
}



function CryptoName(props){
  return(
    <div>

    <text fontFamily='Kalam-Bold' style={{
     fontSize: 40,
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     marginTop: '50px'
    }}>

    {props.name} </text>
    </div>
  );
} 


function Chart(props) {
  return(
  <div>
  <TradingViewWidget
    symbol={props.ticker}
    theme={Themes.LIGHT}
    locale="en"
    style={BarStyles.LINE}
  />
  </div>
  )
}

function BuyandSellButtons(){
  return(
    <div class="text-center">
    <Button variant="outline-success m-3" size="lg">Buy</Button>
    <Button variant="outline-danger m-3" size="lg">Sell</Button>
    </div>
  )
}



function Navbar2(){

  let history = useHistory();
   function routeChange(){ 
    let path = './Login.js'; 
    history.push(path);
  }

  return(
  <div>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">CRYPTO SIMULATOR</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#leaderboard">LEADERBOARD</Nav.Link>
      <Nav.Link href="#FAQ">FAQ</Nav.Link>
    </Nav>
    <Form inline>
      <Button  onClick={routeChange} variant="outline-info">Login/Signup</Button>
    </Form>
  </Navbar>
</div>
  )
}


function GetPrice(){
  return(
    <h1>.</h1>
  )
}




export default App